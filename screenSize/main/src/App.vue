<script setup lang="ts">
  import sideBar from './components/sideBar.vue';
  import commandBox from './components/commandBox.vue';
  import devices from './components/devices.vue';
  import virtualDevice from './components/virtualDevice.vue';
  import { useDraggable } from '@vueuse/core';
  import { ref, watch } from 'vue';
  import { Layout } from './scripts/layout.store';

  const LayoutStore = Layout();

  const barOne = ref<HTMLElement | null>(null);
  const barTwo = ref<HTMLElement | null>(null);
  const barOneWidth = useDraggable(barOne);
  const barTwoWidth = useDraggable(barTwo);
  
  watch(barOneWidth.x, (newValue) => {
    LayoutStore.changeSidebarWidth(newValue || 100);
  });

  watch(barTwoWidth.x, (newValue) => {
    LayoutStore.changeVirtualDeviceWidth((screen.width - newValue) || 100);
  });
</script>

<template>
  <div class="layout">
    <sideBar/>
    <div class="border" id="bar-one" ref="barOne"></div>
    <devices/>
    <div class="border" id="bar-two" ref="barTwo"></div>
    <virtualDevice/>
  </div>
</template>

<style lang="scss">
  .layout {
    display: flex;
    width: 100vw;
    height: 100vh;

    #bar-two {
      background-color: #2A2D32;
    }

    .border {
      width: 4px;
      height: 100vh;
      background-color: #2A2D32;
      &:hover {
        background-color: #0091ff !important;
        transition: background 0.05s 0.1s;
        cursor: col-resize;
      }
    }
  }
</style>

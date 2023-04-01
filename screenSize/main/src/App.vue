<script setup lang="ts">
  import sideBar from './components/sideBar.vue';
  import commandBox from './components/commandBox.vue';
  import devices from './components/devices.vue';
  import virtualDevice from './components/virtualDevice.vue';
  import { useDraggable } from '@vueuse/core';
  import { ref } from 'vue';
  import { Layout } from './scripts/layout';

  const LayoutStore = Layout();

  const barOne = ref<HTMLElement | null>(null);
  const barTwo = ref<HTMLElement | null>(null);
  const {x} = useDraggable(barOne);
  // const {x} = useDraggable(barTwo);
</script>

<template>
  <!-- <commandBox/> -->
  <h1>{{ x }}</h1>
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
    // display: grid;
    display: flex;
    width: 100vw;
    height: 100vh;
    // grid-template-columns: 1.8fr auto 8fr auto 2fr;
    
    #bar-one {
      grid-column: 2/3;
    }

    #bar-two {
      background-color: #cdcee1;
      grid-column: 4/5;
    }
    .border {
      width: 2.5px;
      height: 100vh;
      &:hover {
        background-color: #0091ff !important;
        transition: background 0.05s 0.4s;
        cursor: col-resize;
      }
    }

  }
</style>

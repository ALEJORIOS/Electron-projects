<script setup lang='ts'>
import { Layout } from '@/scripts/layout.store';
import { Main } from '@/scripts/main.store';
import { ref, watch, type Ref } from 'vue';

const currentDirection: Ref<string> = ref("http://52.167.61.106:10443/tms-gb/");

const LayoutStore = Layout();
const MainStore = Main();

watch(LayoutStore, (newValue) => {
    document.querySelector<HTMLElement>(".virtual")?.style.setProperty('--virtualdevice-width', `${newValue.DeviceViewerView}px`);
})

watch(MainStore, (newUrl) => {
    if(!newUrl.url.startsWith('http://') && !newUrl.url.startsWith('https://')) {
        currentDirection.value = `http://${newUrl.url}`;
    }else{
        currentDirection.value = newUrl.url;
    }
    console.log('Dirección: ', currentDirection.value);
})
</script>

<template>
    <div class="virtual">
        <iframe :src="currentDirection" frameborder="0"></iframe>
    </div>
</template>

<style lang="scss">
.virtual{
    width: var(--virtualdevice-width);
    max-width: 50vw;
    min-width: 400px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 10;
    background-color: #e0f1ff;

    iframe {
        width: 80%;
        height: 80%;
    }
}
</style>
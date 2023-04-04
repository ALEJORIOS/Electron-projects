<script setup lang='ts'>
import { Main } from '@/scripts/main.store';

let urlDirection: string;
const MainStore = Main();
const search = (event: KeyboardEvent) => {
    urlDirection = (event.target as HTMLInputElement).value;
    MainStore.changeUrl(urlDirection);
}
</script>

<template>
    <div class="devices">
        <div class="url-direction">
            <input type="text" v-on:keyup.enter="search($event)">
        </div>
    </div>
</template>

<style lang="scss">
    .devices {
        position: relative;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #2A2D32;
        .url-direction {
            width: 100%;
            box-shadow: 15px 0 16px 10px #24272c;
            display: flex;
            align-items: center;
            padding: 0.5em;
            input[type=text] {
                width: 100%;
                height: 2em;
                padding-left: 0.8em;
                outline: none;
                border-radius: 12px;
                border: none;
                background-color: #383B41;
                color: white;
                font-size: 1rem;
                &:focus {
                    border: 1px solid #3178C6;
                }
            }
        }
    }
</style>
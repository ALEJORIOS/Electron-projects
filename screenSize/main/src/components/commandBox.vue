<script setup lang='ts'>
import { Command } from '@/scripts/command.store';

const command = Command();

</script>

<template>
    <div class="commandBox">
        <h1>Hola mundo!</h1>
        <h2>{{ command.key }}</h2>
        <input id="command-input" type="text">
    </div>
</template>

<style lang="scss">
    .commandBox {
        position: absolute;
        width: 600px;
        height: 120px;
        top: 50px;
        left: calc(50vw - 300px);
        background-color: #FDFDFD;
        border-radius: 12px;
        padding: 4px 12px;
        box-shadow: 0 0 8px 4px #F0F0F0;
        #command-input {
            width: 100%;
            height: 32px;
            font-size: 18px;
            border: 2px solid #3178C650;
            border-radius: 16px;
            outline: none;
            padding: 0 12px;
            font-family: 'Open Sans', sans-serif;
            line-height: 32px;
        }
    }
</style>
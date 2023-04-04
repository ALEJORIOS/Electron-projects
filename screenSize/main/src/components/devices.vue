<script setup lang='ts'>
import { Main } from '@/scripts/main.store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
        <span class="title">Devices</span>
        <button class="add-device"><font-awesome-icon icon="fa-solid fa-circle-plus"/> Add Device</button>
        <table class="device-table">
            <thead>
                <th>Name</th>
                <th>Creation date</th>
                <th>Resolution</th>
            </thead>
        </table>
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
        .title {
            font-family: 'Golos Text', sans-serif;
            color: #F0F0F0;
            font-size: 1.6rem;
            padding-left: 0.4em;
            position: relative;
            top: 1rem;
            height: 30px;
            display: flex;
            align-items: center;
        }
        .add-device {
            position: relative;
            top: 1.4em;
            left: 0.4em;
            border: none;
            height: 30px;
            font-size: 1.2rem;
            border-radius: 15px;
            cursor: pointer;
            background-color: #3577e0;
            color: white;
            font-family: "Open sans", sans-serif;
            font-size: 1rem;
            padding: 0 0.6em;
            transition: background-color 0.1s ease, box-shadow 0.2s ease;
            &:active {
                background-color: #568dcc;
            }
            &:hover {
                box-shadow: 0 0 8px 2px #2e54c680;
            }
        }
        .device-table {
            position: relative;
            width: 100%;
            top: 4em;
            left: 1em;
            thead {
                th {
                    color: #B0B0B0;
                    font-family: "Open sans", sans-serif;
                    font-weight: 400;
                }
            }
        }
    }
</style>
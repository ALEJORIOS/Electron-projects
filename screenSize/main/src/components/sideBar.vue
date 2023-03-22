<script setup lang='ts'>
import { useDraggable } from '@vueuse/core'
import { ref, watchEffect, type Ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { uid } from 'uid';
library.add(faLayerGroup);
library.add(faGear);
</script>

<!-- Adjustable side bar -->
<script lang="ts">
    const sbBorder = ref(null);
    const groups: Ref<any[]> = ref([]);
    const { x } = useDraggable(sbBorder, {
        onStart: () => {
            document.querySelector<HTMLElement>(".border")?.style.setProperty('--border-opacity', '1');
        },
        onEnd: () => {
            document.querySelector<HTMLElement>(".border")?.style.setProperty('--border-opacity', '0');
        }});
    watchEffect(() => {
        const widthValue = x.value;
        document.querySelector<HTMLElement>(".sidebar")?.style.setProperty('--sidebar-width', `${widthValue+3}px`);
    });
    let selectedGroups: Ref<Array<string>>;
    const addGroup = () => {
        groups.value.push({name: "Untitled", id: uid()})
    }
    const addCurrentGroup = (id: string) => {
        selectedGroups.value.push(id);
        console.log('>>> ', selectedGroups.value);
    }
</script>

<template>
    <div class="sidebar">
        <div class="deviceBox">Devices</div>
        <button @click="addGroup" class="addGroup sidebar-button">Add a group of devices</button>
        <div class="groups">
            <button v-for="group in groups" :class="{ group: true, selected: selectedGroups.includes(group.id) }" @click="addCurrentGroup(group.id)">
                <font-awesome-icon icon="fa-solid fa-layer-group"/>&nbsp;{{ group.name }}
            </button>
        </div>
        <button class="sidebar-button setting-button"><font-awesome-icon icon="fa-solid fa-gear" />&nbsp;Settings</button>
        <button class="version-button">v1.0.0</button>
        <div ref="sbBorder" class="border"/>
    </div>
</template>

<style lang="scss">
    .sidebar {
        font-family: 'Open Sans', sans-serif;
        --border-opacity: 0;
        display: grid;
        grid-template-rows: repeat(2, auto) 1fr repeat(2, auto);
        background-color: #2a2d32;
        position: absolute;
        top: 0;
        box-shadow: inset -15px 0 16px -10px #131313, 15px 0 16px 10px #F0F0F0;
        min-width: 16%;
        max-width: 50%;
        width: var(--sidebar-width);
        height: 100%;
        user-select: none;
        .deviceBox {
            width: 100%;
            height: 5rem;
            background-color: #383b41;
            color: #D0D0D0;
            font-family: 'Golos Text', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            padding: 1rem;
        }
        .sidebar-button {
            border: none;
            outline: none;
            background-color: transparent;
            color: #D0D0D0;
            text-align: left;
            height: 50px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
            font-size: 1.2rem;
            padding-left: 0.4rem;
            cursor: pointer;
            &:hover {
                background-color: #383b41AA;
            }
        }
        .groups {
            height: 100%;
            margin-top: 0.4rem;
            display: flex;
            flex-direction: column;
            .group {
                border: none;
                outline: none;
                color: #d0d0d0;
                padding: 0.8rem 0;
                background-color: transparent;
                font-family: 'Open Sans', sans-serif;
                font-weight: 300;
                font-size: 1.1rem;
                text-align: left;
                padding-left: 0.8rem;
                border-left: 4px solid green;
                cursor: pointer;
                &:hover {
                    background-color: #383b41AA;
                }
            }
            .selected {
                background-color: red;
            }
        }
        .border{
            position: absolute;
            top: 0;
            right: 0;
            width: 3px;
            height: 100%;
            background-color: rgb(40, 151, 255);
            opacity: var(--border-opacity);
            transition: opacity 0.2s ease;
            cursor: var(--border-cursor);
            &:hover {
                opacity: 1;
                cursor: e-resize;
                transition: opacity 0.2s ease;
            }
        }
        .setting-button {
            border-left: 2px solid #909090;
            padding-left: 0.9rem;
        }
        .version-button {
            border: none;
            outline: none;
            background-color: transparent;
            color: #D0D0D0;
            cursor: pointer;
            font-weight: 600;
            &:hover {
                background-color: #383b41AA;
            }
        }
    }
</style>
<script setup lang='ts'>
import { ref, watch, type Ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCirclePlus, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { uid } from 'uid';
import { Command } from '@/scripts/command.store';
import { Layout } from '@/scripts/layout.store';

library.add(faLayerGroup);
library.add(faGear);
library.add(faCirclePlus);

const LayoutStore = Layout();

watch(LayoutStore, (newValue) => {
    document.querySelector<HTMLElement>(".sidebar")?.style.setProperty('--sidebar-width', `${newValue.sidebarWidth}px`);
})

const sbBorder = ref(null);
    const groups: Ref<any[]> = ref([]);
    const addGroup = () => {
        groups.value.push({name: "Untitled", id: uid()})
    }
    const selectedGroups: Ref<Array<string>> = ref([]);
    const addCurrentGroup = (id: string) => {
        if(Command().key.some((cmd: string) => cmd === 'ControlLeft' || cmd === 'ControlRight' || cmd === 'Control')) {
            if(selectedGroups.value.includes(id)) {
                selectedGroups.value = selectedGroups.value.filter(grp => grp !== id);
            }else{
                selectedGroups.value.push(id);
            }
        }else{
            selectedGroups.value = [id];
        }
    }
</script>

<template>
    <div class="sidebar">
        <div class="deviceBox">Devices</div>
        <button @click="addGroup" class="addGroup sidebar-button">Add a group of devices</button>
        <div class="groups">
            <button v-for="group in groups" :class="{ group: true, selected: selectedGroups?.includes(group.id) }" @click="addCurrentGroup(group.id)">
                <font-awesome-icon icon="fa-solid fa-layer-group"/>&nbsp;{{ group.name }}
                <button class="addDevice">
                    <font-awesome-icon icon="fa-solid fa-circle-plus" />
                </button>
            </button>
        </div>
        <button class="sidebar-button setting-button"><font-awesome-icon icon="fa-solid fa-gear" />&nbsp;Settings</button>
        <button class="version-button">v1.0.0</button>
    </div>
</template>

<style lang="scss">
    .sidebar {
        font-family: 'Open Sans', sans-serif;
        display: grid;
        flex-shrink: 0;
        grid-template-rows: repeat(2, auto) 1fr repeat(2, auto);
        background-color: #2a2d32;
        top: 0;
        box-shadow: inset -15px 0 16px -10px #24272c, 15px 0 16px 10px #F0F0F0;
        width: var(--sidebar-width);
        min-width: 210px;
        max-width: 590px;
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
            font-size: 1rem;
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
                display: grid;
                grid-template-columns: auto auto 1fr;
                width: 100%;
                color: #d0d0d0;
                padding: 0.6rem 0;
                background-color: transparent;
                font-family: 'Open Sans', sans-serif;
                font-weight: 300;
                font-size: 0.9rem;
                text-align: left;
                padding-left: 0.8rem;
                padding-right: 1rem;
                border-left: 4px solid green;
                align-items: center;
                cursor: pointer;
                &:hover {
                    background-color: #383b4160;
                }
                .addDevice{
                    display: flex;
                    justify-self: flex-end;
                    align-self: center;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    border: none;
                    font-size: 0.9rem;
                    color: #B0B0B0;
                    background-color: transparent;
                    height: 2rem;
                    width: 2rem;
                    cursor: pointer;
                    &:hover {
                        background-color: #4b4f56;
                        color: #f0f0f0;
                    }
                }
            }
            .selected {
                background-color: #383b41;
            }
        }
        // .border{
        //     position: absolute;
        //     top: 0;
        //     right: 0;
        //     width: 3px;
        //     height: 100%;
        //     background-color: rgb(40, 151, 255);
        //     opacity: var(--border-opacity);
        //     transition: opacity 0.2s ease;
        //     cursor: var(--border-cursor);
        //     &:hover {
        //         opacity: 1;
        //         cursor: e-resize;
        //         transition: opacity 0.2s ease;
        //     }
        // }
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
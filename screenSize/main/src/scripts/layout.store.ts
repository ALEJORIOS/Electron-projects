import { onKeyStroke, useDraggable } from '@vueuse/core';
import { defineStore } from 'pinia';

export const Layout = defineStore('Layout', {
    state: () => ({sidebarWidth: -1, devicesWidth: -1, deviceViewerView: -1}),
    getters: {
        sidebarWidth: (state) => state.sidebarWidth,
        devicesWidth: (state) => state.devicesWidth,
        deviceViewerWidth: (state) => state.deviceViewerView
    },
    actions: {
        changeSidebarWidth(newWidth: number) {
            console.log('Width: ', newWidth);
            this.sidebarWidth = newWidth;
        }
        // changeCommand(newCommand: Array<string>) {
        //     console.log('Cambio: ', newCommand);
        //     this.currentCommand = newCommand;
        // }
    }
})
import { defineStore } from 'pinia';

export const Layout = defineStore('Layout', {
    state: () => ({SidebarWidth: 300, DevicesWidth: -1, DeviceViewerView: -1}),
    getters: {
        sidebarWidth: (state) => state.SidebarWidth,
        devicesWidth: (state) => state.DevicesWidth,
        deviceViewerWidth: (state) => state.DeviceViewerView
    },
    actions: {
        changeSidebarWidth(newWidth: number) {
            this.SidebarWidth = newWidth;
        },
        changeVirtualDeviceWidth(newWidth: number) {
            this.DeviceViewerView = newWidth;
        }
    }
})
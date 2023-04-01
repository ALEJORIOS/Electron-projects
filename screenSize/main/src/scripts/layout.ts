import { defineStore } from "pinia";


export const Layout = defineStore('Layout', {
    state: () => ({sideBarWidth: -1, devicesViewWidth: -1, deviceViewWidth: -1})
})
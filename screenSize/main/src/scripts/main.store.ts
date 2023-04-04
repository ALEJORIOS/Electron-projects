import { defineStore } from 'pinia';

export const Main = defineStore('Main', {
    state: () => (<StateInt>{Url: "", Devices: []}),
    getters: {
        url: (state) => state.Url,
        device: (state) => state.Devices
    },
    actions: {
        changeUrl(newUrl: string) {
            this.Url = newUrl;
        },
        addDevice(newDevice: DeviceInt) {
            this.Devices.push(newDevice)
        }
    }
})

interface StateInt {
    Url: string,
    Devices: Array<DeviceInt>
}

interface DeviceInt {
    id: string,
    name: string,
    width: number,
    height: number,
    relation: number,
    dpi: number
}
import { defineStore } from 'pinia';

export const Main = defineStore('Main', {
    state: () => ({Url: "https://www.typescriptlang.org/"}),
    getters: {
        url: (state) => state.Url
    },
    actions: {
        changeUrl(newUrl: string) {
            this.Url = newUrl;
        }
    }
})
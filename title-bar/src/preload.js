// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

// contextBridge.exposeInMainWorld('API', {
//     handleAction: (value) => ipcRenderer.on('window-status', value)
// })

contextBridge.exposeInMainWorld('API', {
    winAction: (winAction) => ipcRenderer.send('window-action', winAction),
    winStatus: (winStatus) => ipcRenderer.on('window-status', winStatus)
})
const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

console.log("loaded comp");
closeBtn.addEventListener('click', () => {
    console.log("Click");
    ipc.send('closeApp');
})
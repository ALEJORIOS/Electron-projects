import { onKeyStroke } from '@vueuse/core';
import { defineStore } from 'pinia'

let currentCommands: Array<AllCommandsInt> = [];

export const Command = defineStore('Command', {
    state: () => ({currentCommand: [""]}),
    getters: {
        key: (state) => state.currentCommand
    },
    actions: {
        changeCommand(newCommand: Array<string>) {
            console.log(">>> ", newCommand )
            this.currentCommand = newCommand;
        }
    }
})

onKeyStroke(true, (e: KeyboardEvent) => {
    e.preventDefault();
    sendCommand({command: e.code as unknown as AllCommandsInt, status: 'down'})
}, {eventName: 'keydown'})

onKeyStroke(true, (e: KeyboardEvent) => {
    e.preventDefault();
    sendCommand({command: e.code as unknown as AllCommandsInt, status: 'up'})
}, {eventName: 'keyup'})

const sendCommand = (command: CommandInt) => {
    if(command.status === 'down') {
        if(currentCommands.indexOf(command.command) === -1) {
            currentCommands.push(command.command);
            Command().changeCommand(currentCommands as unknown as Array<string>);
        }
    }else{
        currentCommands = currentCommands.filter(cmd => cmd !== command.command);
        Command().changeCommand(currentCommands as unknown as Array<string>);
    }
}

export interface CommandInt {
    command: AllCommandsInt;
    status: "up" | "down";
}

interface AllCommandsInt {
    Control: "up" | "down";
    Shift: "up" | "down";
    Backspace: "up" | "down";
    Tab: "up" | "down";
    Enter: "up" | "down";
    ShiftLeft: "up" | "down";
    ShiftRight: "up" | "down";
    ControlLeft: "up" | "down";
    ControlRight: "up" | "down";
    AltLeft: "up" | "down";
    AltRight: "up" | "down";
    Pause: "up" | "down";
    CapsLock: "up" | "down";
    Escape: "up" | "down";
    Space: "up" | "down";
    PageUp: "up" | "down";
    PageDown: "up" | "down";
    End: "up" | "down";
    Home: "up" | "down";
    ArrowLeft: "up" | "down";
    ArrowUp: "up" | "down";
    ArrowRight: "up" | "down";
    ArrowDown: "up" | "down";
    PrintScreen: "up" | "down";
    Insert: "up" | "down";
    Delete: "up" | "down";
    Digit0: "up" | "down";
    Digit1: "up" | "down";
    Digit2: "up" | "down";
    Digit3: "up" | "down";
    Digit4: "up" | "down";
    Digit5: "up" | "down";
    Digit6: "up" | "down";
    Digit7: "up" | "down";
    Digit8: "up" | "down";
    Digit9: "up" | "down";
    KeyA: "up" | "down";
    KeyB: "up" | "down";
    KeyC: "up" | "down";
    KeyD: "up" | "down";
    KeyE: "up" | "down";
    KeyF: "up" | "down";
    KeyG: "up" | "down";
    KeyH: "up" | "down";
    KeyI: "up" | "down";
    KeyJ: "up" | "down";
    KeyK: "up" | "down";
    KeyL: "up" | "down";
    KeyM: "up" | "down";
    KeyN: "up" | "down";
    KeyO: "up" | "down";
    KeyP: "up" | "down";
    KeyQ: "up" | "down";
    KeyR: "up" | "down";
    KeyS: "up" | "down";
    KeyT: "up" | "down";
    KeyU: "up" | "down";
    KeyV: "up" | "down";
    KeyW: "up" | "down";
    KeyX: "up" | "down";
    KeyY: "up" | "down";
    KeyZ: "up" | "down";
    MetaLeft: "up" | "down";
    MetaRight: "up" | "down";
    ContextMenu: "up" | "down";
    Numpad0: "up" | "down";
    Numpad1: "up" | "down";
    Numpad2: "up" | "down";
    Numpad3: "up" | "down";
    Numpad4: "up" | "down";
    Numpad5: "up" | "down";
    Numpad6: "up" | "down";
    Numpad7: "up" | "down";
    Numpad8: "up" | "down";
    Numpad9: "up" | "down";
    NumpadMultiply: "up" | "down";
    NumpadAdd: "up" | "down";
    NumpadSubtract: "up" | "down";
    NumpadDecimal: "up" | "down";
    NumpadDivide: "up" | "down";
    F1: "up" | "down";
    F2: "up" | "down";
    F3: "up" | "down";
    F4: "up" | "down";
    F5: "up" | "down";
    F6: "up" | "down";
    F7: "up" | "down";
    F8: "up" | "down";
    F9: "up" | "down";
    F10: "up" | "down";
    F11: "up" | "down";
    F12: "up" | "down";
    NumLock: "up" | "down";
    ScrollLock: "up" | "down";
    Semicolon: "up" | "down";
    Equal: "up" | "down";
    Comma: "up" | "down";
    Minus: "up" | "down";
    Period: "up" | "down";
    Slash: "up" | "down";
    Backquote: "up" | "down";
    BracketLeft: "up" | "down";
    Backslash: "up" | "down";
    BracketRight: "up" | "down";
    Quote: "up" | "down";
}
import { onKeyStroke } from '@vueuse/core'
import { BehaviorSubject } from 'rxjs';

let commandStatus: AllCommandsInt = {
    Control: 'up',
    Shift: 'up',
    Backspace: 'up',
    Tab: 'up',
    Enter: 'up',
    ShiftLeft: 'up',
    ShiftRight: 'up',
    ControlLeft: 'up',
    ControlRight: 'up',
    AltLeft: 'up',
    AltRight: 'up',
    Pause: 'up',
    CapsLock: 'up',
    Escape: 'up',
    Space: 'up',
    PageUp: 'up',
    PageDown: 'up',
    End: 'up',
    Home: 'up',
    ArrowLeft: 'up',
    ArrowUp: 'up',
    ArrowRight: 'up',
    ArrowDown: 'up',
    PrintScreen: 'up',
    Insert: 'up',
    Delete: 'up',
    Digit0: 'up',
    Digit1: 'up',
    Digit2: 'up',
    Digit3: 'up',
    Digit4: 'up',
    Digit5: 'up',
    Digit6: 'up',
    Digit7: 'up',
    Digit8: 'up',
    Digit9: 'up',
    KeyA: 'up',
    KeyB: 'up',
    KeyC: 'up',
    KeyD: 'up',
    KeyE: 'up',
    KeyF: 'up',
    KeyG: 'up',
    KeyH: 'up',
    KeyI: 'up',
    KeyJ: 'up',
    KeyK: 'up',
    KeyL: 'up',
    KeyM: 'up',
    KeyN: 'up',
    KeyO: 'up',
    KeyP: 'up',
    KeyQ: 'up',
    KeyR: 'up',
    KeyS: 'up',
    KeyT: 'up',
    KeyU: 'up',
    KeyV: 'up',
    KeyW: 'up',
    KeyX: 'up',
    KeyY: 'up',
    KeyZ: 'up',
    MetaLeft: 'up',
    MetaRight: 'up',
    ContextMenu: 'up',
    Numpad0: 'up',
    Numpad1: 'up',
    Numpad2: 'up',
    Numpad3: 'up',
    Numpad4: 'up',
    Numpad5: 'up',
    Numpad6: 'up',
    Numpad7: 'up',
    Numpad8: 'up',
    Numpad9: 'up',
    NumpadMultiply: 'up',
    NumpadAdd: 'up',
    NumpadSubtract: 'up',
    NumpadDecimal: 'up',
    NumpadDivide: 'up',
    F1: 'up',
    F2: 'up',
    F3: 'up',
    F4: 'up',
    F5: 'up',
    F6: 'up',
    F7: 'up',
    F8: 'up',
    F9: 'up',
    F10: 'up',
    F11: 'up',
    F12: 'up',
    NumLock: 'up',
    ScrollLock: 'up',
    Semicolon: 'up',
    Equal: 'up',
    Comma: 'up',
    Minus: 'up',
    Period: 'up',
    Slash: 'up',
    Backquote: 'up',
    BracketLeft: 'up',
    Backslash: 'up',
    BracketRight: 'up',
    Quote: 'up'
}

export const Command = new BehaviorSubject<AllCommandsInt>(commandStatus);

export interface CommandInt {
    command: string;
    status: "up" | "down" | "";
}

interface AllCommandsInt {
    Control: "up" | "down" | "";
    Shift: "up" | "down" | "";
    Backspace: "up" | "down" | "";
    Tab: "up" | "down" | "";
    Enter: "up" | "down" | "";
    ShiftLeft: "up" | "down" | "";
    ShiftRight: "up" | "down" | "";
    ControlLeft: "up" | "down" | "";
    ControlRight: "up" | "down" | "";
    AltLeft: "up" | "down" | "";
    AltRight: "up" | "down" | "";
    Pause: "up" | "down" | "";
    CapsLock: "up" | "down" | "";
    Escape: "up" | "down" | "";
    Space: "up" | "down" | "";
    PageUp: "up" | "down" | "";
    PageDown: "up" | "down" | "";
    End: "up" | "down" | "";
    Home: "up" | "down" | "";
    ArrowLeft: "up" | "down" | "";
    ArrowUp: "up" | "down" | "";
    ArrowRight: "up" | "down" | "";
    ArrowDown: "up" | "down" | "";
    PrintScreen: "up" | "down" | "";
    Insert: "up" | "down" | "";
    Delete: "up" | "down" | "";
    Digit0: "up" | "down" | "";
    Digit1: "up" | "down" | "";
    Digit2: "up" | "down" | "";
    Digit3: "up" | "down" | "";
    Digit4: "up" | "down" | "";
    Digit5: "up" | "down" | "";
    Digit6: "up" | "down" | "";
    Digit7: "up" | "down" | "";
    Digit8: "up" | "down" | "";
    Digit9: "up" | "down" | "";
    KeyA: "up" | "down" | "";
    KeyB: "up" | "down" | "";
    KeyC: "up" | "down" | "";
    KeyD: "up" | "down" | "";
    KeyE: "up" | "down" | "";
    KeyF: "up" | "down" | "";
    KeyG: "up" | "down" | "";
    KeyH: "up" | "down" | "";
    KeyI: "up" | "down" | "";
    KeyJ: "up" | "down" | "";
    KeyK: "up" | "down" | "";
    KeyL: "up" | "down" | "";
    KeyM: "up" | "down" | "";
    KeyN: "up" | "down" | "";
    KeyO: "up" | "down" | "";
    KeyP: "up" | "down" | "";
    KeyQ: "up" | "down" | "";
    KeyR: "up" | "down" | "";
    KeyS: "up" | "down" | "";
    KeyT: "up" | "down" | "";
    KeyU: "up" | "down" | "";
    KeyV: "up" | "down" | "";
    KeyW: "up" | "down" | "";
    KeyX: "up" | "down" | "";
    KeyY: "up" | "down" | "";
    KeyZ: "up" | "down" | "";
    MetaLeft: "up" | "down" | "";
    MetaRight: "up" | "down" | "";
    ContextMenu: "up" | "down" | "";
    Numpad0: "up" | "down" | "";
    Numpad1: "up" | "down" | "";
    Numpad2: "up" | "down" | "";
    Numpad3: "up" | "down" | "";
    Numpad4: "up" | "down" | "";
    Numpad5: "up" | "down" | "";
    Numpad6: "up" | "down" | "";
    Numpad7: "up" | "down" | "";
    Numpad8: "up" | "down" | "";
    Numpad9: "up" | "down" | "";
    NumpadMultiply: "up" | "down" | "";
    NumpadAdd: "up" | "down" | "";
    NumpadSubtract: "up" | "down" | "";
    NumpadDecimal: "up" | "down" | "";
    NumpadDivide: "up" | "down" | "";
    F1: "up" | "down" | "";
    F2: "up" | "down" | "";
    F3: "up" | "down" | "";
    F4: "up" | "down" | "";
    F5: "up" | "down" | "";
    F6: "up" | "down" | "";
    F7: "up" | "down" | "";
    F8: "up" | "down" | "";
    F9: "up" | "down" | "";
    F10: "up" | "down" | "";
    F11: "up" | "down" | "";
    F12: "up" | "down" | "";
    NumLock: "up" | "down" | "";
    ScrollLock: "up" | "down" | "";
    Semicolon: "up" | "down" | "";
    Equal: "up" | "down" | "";
    Comma: "up" | "down" | "";
    Minus: "up" | "down" | "";
    Period: "up" | "down" | "";
    Slash: "up" | "down" | "";
    Backquote: "up" | "down" | "";
    BracketLeft: "up" | "down" | "";
    Backslash: "up" | "down" | "";
    BracketRight: "up" | "down" | "";
    Quote: "up" | "down" | "";
}

onKeyStroke(true, (e: KeyboardEvent) => {
    e.preventDefault();
    sendCommand({command: e.code, status: 'down'})
}, {eventName: 'keydown'})

onKeyStroke(true, (e: KeyboardEvent) => {
    e.preventDefault();
    sendCommand({command: e.code, status: 'up'})
}, {eventName: 'keyup'})

const sendCommand = (command: CommandInt) => {
    if(commandStatus[command.command as keyof AllCommandsInt] !== command.status) {
        commandStatus[command.command as keyof AllCommandsInt] = command.status;
        Command.next(commandStatus);
    }
}
document.querySelector('#dismiss-btn').addEventListener('click', () => {
    window.API.winAction('minimize');
})

document.querySelector('#maximize-btn').addEventListener('click', () => {
    window.API.winAction('maximize');
});

document.querySelector('#minimize-btn').addEventListener('click', () => {
    window.API.winAction('maximize');
});

document.querySelector('#close-btn').addEventListener('click', () => {
    window.API.winAction('close');
})

window.API.winStatus((event, value) => {
    if(value === "normal") {
        document.querySelector('#minimize-btn').style.display = 'none';
        document.querySelector('#maximize-btn').style.display = 'block';
    }else if (value === "max") {
        document.querySelector('#maximize-btn').style.display = 'none';
        document.querySelector('#minimize-btn').style.display = 'block';
    }
})
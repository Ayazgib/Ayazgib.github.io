'use strict'
const sound = new Audio('sound.mp3'),
        txt = document.querySelector('.txt');



const delay = setTimeout(() => {
    sound.play();
    txt.style.display = 'block'
}, 5000);
const stop = setTimeout(() => {
    sound.stop();
}, 25000);
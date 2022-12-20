let alto_header = document.querySelector('header').clientHeight;
let alto_pagos = document.querySelector('#casino-imgs').clientHeight;
let alto_pasos = document.querySelector('.header-steps').clientHeight;
let alto_pantalla = window.screen.height;
let boton = document.querySelector('.btn_join');

//100% de la pantalla incluya los steps;

let alto_contenido = document.querySelector('.header-bg');

if (window.screen.width > 1050) {
    alto_contenido.style.height = `calc(100vh - ${alto_pasos}px)`
    window.onresize = function () {
        alto_contenido.style.height = `calc(100vh - ${alto_pasos}px)`
    }
}

//Toogle del boton inferior de la pantalla
let alto_total = alto_pagos + alto_pasos + boton.clientHeight + alto_contenido.clientHeight;
let diferencia = Math.abs(alto_total - alto_pantalla);
window.onscroll = function () {
    if (window.scrollY > diferencia) {
        boton.style.display = 'flex';
    } else {
        boton.style.display = 'none';
    }
}
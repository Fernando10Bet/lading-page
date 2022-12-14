let alto_header = document.querySelector('header').clientHeight;
let alto_pagos = document.querySelector('#casino-imgs').clientHeight;
let alto_pasos = document.querySelector('.header-steps').clientHeight;
let alto_pantalla = window.screen.height;
let boton = document.querySelector('.btn_join');
let alto_total = alto_header + alto_pagos + alto_pasos + boton.clientHeight;
let diferencia = Math.abs(alto_total - alto_pantalla);
window.onscroll = function(){
    if(window.scrollY > diferencia){
        boton.style.display = 'flex';
    }else{
        boton.style.display = 'none';
    }
}

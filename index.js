let alto_header = document.querySelector('header').clientHeight;
let alto_pantalla = window.screen.height;
let boton = document.querySelector('.btn_join');
let diferencia = Math.abs(alto_header - alto_pantalla);
window.onscroll = function(){
    if(window.scrollY > diferencia){
        boton.style.display = 'flex';
    }else{
        boton.style.display = 'none';
    }
}

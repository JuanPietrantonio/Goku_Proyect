var estadoGoku = "inicial";
var ataqueGoku = document.getElementById("gif-box");
var sonido = "off";
var sonidoGoku = document.getElementById("musica-tecla");
var musicaFondo = document.getElementById("musica-fondo");

function gokuAtaca1() {
    if (estadoGoku == "inicial") {
        estadoGoku = "ataque";
        ataqueGoku.classList.remove("ataque2");
        ataqueGoku.classList.remove("ataque3");
        ataqueGoku.classList.remove("ataque4");
        ataqueGoku.classList.remove("ataque5");
        ataqueGoku.classList.remove("ataque6");
        ataqueGoku.classList.add("ataque1");
    }
    else {
        estadoGoku = "inicial";
        ataqueGoku.classList.remove("ataque1");
    }
}

function gokuAtaca2() {
    if (estadoGoku == "inicial") {
        estadoGoku = "ataque";
        ataqueGoku.classList.remove("ataque1");
        ataqueGoku.classList.remove("ataque3");
        ataqueGoku.classList.remove("ataque4");
        ataqueGoku.classList.remove("ataque5");
        ataqueGoku.classList.remove("ataque6");
        ataqueGoku.classList.add("ataque2");
    }
    else {
        estadoGoku = "inicial";
        ataqueGoku.classList.remove("ataque2");
    }
}

function gokuAtaca3() {
    if (estadoGoku == "inicial") {
        estadoGoku = "ataque";
        ataqueGoku.classList.remove("ataque1");
        ataqueGoku.classList.remove("ataque2");
        ataqueGoku.classList.remove("ataque4");
        ataqueGoku.classList.remove("ataque5");
        ataqueGoku.classList.remove("ataque6");
        ataqueGoku.classList.add("ataque3");
    }
    else {
        estadoGoku = "inicial";
        ataqueGoku.classList.remove("ataque3");
    }
}

function gokuAtaca4() {
    if (estadoGoku == "inicial") {
        estadoGoku = "ataque";
        ataqueGoku.classList.remove("ataque1");
        ataqueGoku.classList.remove("ataque2");
        ataqueGoku.classList.remove("ataque3");
        ataqueGoku.classList.remove("ataque5");
        ataqueGoku.classList.remove("ataque6");
        ataqueGoku.classList.add("ataque4");
    }
    else {
        estadoGoku = "inicial";
        ataqueGoku.classList.remove("ataque4");
    }
}

function gokuAtaca5() {
    if (estadoGoku == "inicial") {
        estadoGoku = "ataque";
        ataqueGoku.classList.remove("ataque1");
        ataqueGoku.classList.remove("ataque2");
        ataqueGoku.classList.remove("ataque3");
        ataqueGoku.classList.remove("ataque4");
        ataqueGoku.classList.remove("ataque6");
        ataqueGoku.classList.add("ataque5");
    }
    else {
        estadoGoku = "inicial";
        ataqueGoku.classList.remove("ataque5");
    }
}

function gokuAtaca6() {
    if (estadoGoku == "inicial") {
        estadoGoku = "ataque";
        ataqueGoku.classList.remove("ataque1");
        ataqueGoku.classList.remove("ataque2");
        ataqueGoku.classList.remove("ataque3");
        ataqueGoku.classList.remove("ataque4");
        ataqueGoku.classList.remove("ataque5");
        ataqueGoku.classList.add("ataque6");
    }
    else {
        estadoGoku = "inicial";
        ataqueGoku.classList.remove("ataque6");
    }
}

function musicafondo(){
    if (musicaFondo.paused) {
        musicaFondo.play();
    }
    else {
        musicaFondo.pause();
    }
}

function Sonido() {
    musicafondo();
}


document.addEventListener('DOMContentLoaded', function(){
"use strict";
//compatibilidad con multiples navegadores
let frame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

let canvas = document.getElementById('lienzo');
let context = canvas.getContext('2d'); 

let warrior1 = new Warrior();
let imagen_start = new Image();
imagen_start.src = "./img/interfaz/start.png";
let start_visible = true;

let player1_interfaz = new Builder();


canvas.onmousedown = checkearTorre;
canvas.onmousemove = moverTorre;
canvas.onmouseup = unDraggear;

function unDraggear() {

    player1_interfaz.setEstado("torre_rapida", "unselected");
}



function moverTorre(evt) {

    var mousePos = getMousePos(canvas, evt);


    if (player1_interfaz.getEstado("torre_rapida") == "selected") {

        player1_interfaz.setPosicionTorre("torre_rapida", mousePos.x - 55, mousePos.y - 62);

    }
}



function checkearTorre(evt) {

    var mousePos = getMousePos(canvas, evt);

    if (mousePos.x >= player1_interfaz.getTorreRapidaX() && mousePos.x <= player1_interfaz.getTorreRapidaX() + 126 ) {
       
        player1_interfaz.setEstado("torre_rapida", "selected");
        console.log("mousedown");
        

    }
    

}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

canvas.addEventListener('click', function (evt) {

    
    var mousePos = getMousePos(canvas, evt);
    console.log(mousePos.x);


if (mousePos.x <= 10 + 70 && mousePos.x >= 10 && mousePos.y <= 10 + 30 && mousePos.y >= 10) {
  
    warrior1.setEstado("moviendose");
    start_visible = false;
}



});

tiempo();




function tiempo() {
    //hace ejecutar 60 veces por segundo
    frame(tiempo);
    context.clearRect(0, 0, canvas.width, canvas.heigh);
    // context.fillRect(0,280 ,100,50);

    dibujarMapa(context);
    player1_interfaz.mostrar(context);


    // dibujarStartButton(context);

    if (start_visible == true) {
        context.drawImage(imagen_start, 10, 10, 70, 30);
    }
    

    if (warrior1.getEstado() == "moviendose") {

        warrior1.avanzar();
        warrior1.dibujar(context);
        
    }
  


    

}


});


// class Game {

//     constructor() {
//     this.frame = window.requestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.msRequestAnimationFrame;

//     this.canvas = document.getElementById('lienzo');
//     this.context = this.getCanvasContext(canvas);


//     }

//     getCanvasContext (canvas) {

//         this.context = canvas.getContext('2d');
//         return this.context;
//     }


//     run (){

//         console.log("game run");
//         // this.frame(this.run);
//         // this.context.clearRect(0, 0, canvas.width, canvas.heigh);
//         // this.context.fillRect(400, 400, 100, 100);

//     }




// }

// let game = new Game();
// game.run();


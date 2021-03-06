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
let warrior2 = new Warrior();
let warrior3 = new Warrior();
let warrior4 = new Warrior();
let warrior5 = new Warrior();
let imagen_start = new Image();
imagen_start.src = "./img/interfaz/start.png";
let start_visible = true;

let player1_interfaz = new Builder();


canvas.onmousedown = checkearTorre;
canvas.onmousemove = moverTorre;
canvas.onmouseup = unDraggear;

function unDraggear() {

    



    player1_interfaz.setEstado("torre_rapida", "unselected");
    player1_interfaz.setEstado("torre_lenta", "unselected");
    player1_interfaz.setEstado("torre_relentizadora", "unselected");
    player1_interfaz.serMostrarConstruccionesPosibles(false);
}



function moverTorre(evt) {

    var mousePos = getMousePos(canvas, evt);


    if (player1_interfaz.getEstado("torre_rapida") == "selected") {

        player1_interfaz.setPosicionTorre("torre_rapida", mousePos.x - 55, mousePos.y - 62);

    }

    if (player1_interfaz.getEstado("torre_lenta") == "selected") {

        player1_interfaz.setPosicionTorre("torre_lenta", mousePos.x - 55, mousePos.y - 62);

    }

    if (player1_interfaz.getEstado("torre_relentizadora") == "selected") {

        player1_interfaz.setPosicionTorre("torre_relentizadora", mousePos.x - 55, mousePos.y - 62);

    }
}





function checkearTorre(evt) {

    var mousePos = getMousePos(canvas, evt);

    if (mousePos.x >= player1_interfaz.getTorreRapidaX() && mousePos.x <= player1_interfaz.getTorreRapidaX() + 126 &&
        mousePos.y >= player1_interfaz.getTorreRapidaY() && mousePos.y <= player1_interfaz.getTorreRapidaY() + 100) {
       
        player1_interfaz.setEstado("torre_rapida", "selected");

        player1_interfaz.marcarPosiblesConstrucciones("torre_rapida");

    }

    if (mousePos.x >= player1_interfaz.getTorreLentaX() && mousePos.x <= player1_interfaz.getTorreLentaX() + 126 &&
    mousePos.y >= player1_interfaz.getTorreLentaY() && mousePos.y <= player1_interfaz.getTorreLentaY() + 100) {
   
    player1_interfaz.setEstado("torre_lenta", "selected");

    player1_interfaz.marcarPosiblesConstrucciones("torre_lenta");

    }

    if (mousePos.x >= player1_interfaz.getTorreRelentizadoraX() && mousePos.x <= player1_interfaz.getTorreRelentizadoraX() + 126 &&
    mousePos.y >= player1_interfaz.getTorreRelentizadoraY() && mousePos.y <= player1_interfaz.getTorreRelentizadoraY() + 100) {
   
    player1_interfaz.setEstado("torre_relentizadora", "selected");

    player1_interfaz.marcarPosiblesConstrucciones("torre_relentizadora");

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
    // console.log(mousePos.x);


if (mousePos.x <= 10 + 70 && mousePos.x >= 10 && mousePos.y <= 10 + 30 && mousePos.y >= 10 && start_visible == true) {
  



    warrior1.setEstado("moviendose");
    warrior1.spawnear();
    warrior2.setEstado("moviendose");
    warrior2.spawnear();
    warrior3.setEstado("moviendose");
    warrior3.spawnear();
    warrior4.setEstado("moviendose");
    warrior4.spawnear();
    warrior5.setEstado("moviendose");
    warrior5.spawnear();
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
    





    if (player1_interfaz.getMostrarConstruccionesPosibles() == true){

        
        context.beginPath();
        context.lineWidth = "4";
        context.strokeStyle = "yellow";
        context.rect(80, 96, 107, 100);
        context.stroke();

        context.beginPath();
        context.lineWidth = "4";
        context.strokeStyle = "yellow";
        context.rect(245, 176, 107, 100);
        context.stroke();

        context.beginPath();
        context.lineWidth = "4";
        context.strokeStyle = "yellow";
        context.rect(474, 176, 107, 100);
        context.stroke();

        context.beginPath();
        context.lineWidth = "4";
        context.strokeStyle = "yellow";
        context.rect(500, 345, 107, 100);
        context.stroke();
    
    
       
    }


    // dibujarStartButton(context);

    if (start_visible == true) {
        context.drawImage(imagen_start, 10, 10, 70, 30);
    }
    
   
    if (warrior1.getEstado() == "moviendose") {

        warrior1.avanzar();
        warrior1.dibujar(context);
        
    }

    if (warrior2.getEstado() == "moviendose") {

        warrior2.avanzar();
        warrior2.dibujar(context);
        
    }
    if (warrior3.getEstado() == "moviendose") {

        warrior3.avanzar();
        warrior3.dibujar(context);
        
    }
    if (warrior4.getEstado() == "moviendose") {

        warrior4.avanzar();
        warrior4.dibujar(context);
        
    }
    if (warrior5.getEstado() == "moviendose") {

        warrior5.avanzar();
        warrior5.dibujar(context);
        
    }
  
  

    player1_interfaz.mostrar(context);
    

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


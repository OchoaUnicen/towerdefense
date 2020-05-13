document.addEventListener('DOMContentLoaded', function(){
"use strict";
//compatibilidad con multiples navegadores
let frame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

let canvas = document.getElementById('lienzo');
let context = canvas.getContext('2d'); 


tiempo();



function tiempo() {
    //hace ejecutar 60 veces por segundo
    frame(tiempo);
    context.clearRect(0, 0, canvas.width, canvas.heigh);
    // context.fillRect(0,280 ,100,50);

    dibujarMapa(context);



    

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


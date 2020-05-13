class Warrior {


    constructor() {


        this.imagen = new Image();
        this.imagen.src = "./img/warrior_0.png";
        this.x = 0;
        this.y = 100;
        
    }

    dibujar(context) {


        drawImage(this.imagen, this.x, this.y);


    }

}
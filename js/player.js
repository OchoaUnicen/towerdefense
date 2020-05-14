class Player {

    constructor() {
        this.x = 50;
        this.y = 50;
        this.imagen_izquierda = new Image();
        this.imagen_izquierda.src = "./img/personaje_izquierda.png";
        this.imagen_derecha = new Image();
        this.imagen_derecha.src = "./img/personaje_derecha.png"
        this.direccion = "izquierda";
        this.gravity = 0.25;
        this.gravitySpeed = 0.05;
        this.speedX = 0;
        this.speedY = 0;
        this.cd_animacion_caminar = 0;
       
    }

    getDireccion() {

        return this.direccion;
    }

    cooldowns (){

      

        if (this.cd_animacion_caminar > 0) {
           
            this.cd_animacion_caminar -= 15;
            
        }


        if (this.cd_animacion_caminar <= 0) {
            this.cd_animacion_caminar = 0;

        }


    }

    setImagen(direccion) {
        if(this.direccion == "izquierda") {
            this.imagen_izquierda.src = "./img/anim_caminar_izquierda_1.png";
        }
        if(this.direccion == "derecha" ){
            this.imagen_derecha.src = "./img/anim_caminar_derecha_1.png";
        }

    }

    setCDAnimacion(cd) {
        if (this.cd_animacion_caminar == 0) {
            this.cd_animacion_caminar = cd;
        }

    
    }

    setDireccion (direccion) {


        this.direccion = direccion;
    }

    pararAnimacion() {

     
        if (this.direccion == "izquierda") {

            this.imagen_izquierda.src = "./img/personaje_izquierda.png";

        }

        if (this.direccion == "derecha") {

            this.imagen_derecha.src = "./img/personaje_derecha.png";

        }

        
        this.cd_animacion_caminar = 0;
      

    }

    animar() {

       

        if (this.direccion == "izquierda") {

            if (this.cd_animacion_caminar <= 600 && this.cd_animacion_caminar > 500) {

                this.imagen_izquierda.src = "./img/anim_caminar_izquierda_1.png";
            }
            if (this.cd_animacion_caminar < 500  && this.cd_animacion_caminar < 400) {

                this.imagen_izquierda.src = "./img/anim_caminar_izquierda_2.png";
            }
            if (this.cd_animacion_caminar < 400 && this.cd_animacion_caminar < 300) {

                this.imagen_izquierda.src = "./img/anim_caminar_izquierda_3.png";
            }
            if (this.cd_animacion_caminar < 300 && this.cd_animacion_caminar < 200) {

                this.imagen_izquierda.src = "./img/anim_caminar_izquierda_4.png";
            }
            if (this.cd_animacion_caminar < 200 && this.cd_animacion_caminar < 100) {

                this.imagen_izquierda.src = "./img/anim_caminar_izquierda_5.png";
            }
            if (this.cd_animacion_caminar < 100 && this.cd_animacion_caminar < 0) {

                this.imagen_izquierda.src = "./img/anim_caminar_izquierda_6.png";
            }



          

        }

        else if (this.direccion == "derecha") {

           

            if (this.cd_animacion_caminar < 600 && this.cd_animacion_caminar > 500) {

                this.imagen_derecha.src = "./img/anim_caminar_derecha_1.png";
            }
            if (this.cd_animacion_caminar < 500  && this.cd_animacion_caminar < 400) {

                this.imagen_derecha.src = "./img/anim_caminar_derecha_2.png";
            }
            if (this.cd_animacion_caminar < 400 && this.cd_animacion_caminar < 300) {

                this.imagen_derecha.src = "./img/anim_caminar_derecha_3.png";
            }
            if (this.cd_animacion_caminar < 300 && this.cd_animacion_caminar < 200) {

                this.imagen_derecha.src = "./img/anim_caminar_derecha_4.png";
            }
            if (this.cd_animacion_caminar < 200 && this.cd_animacion_caminar < 100) {

                this.imagen_derecha.src = "./img/anim_caminar_derecha_5.png";
            }
            if (this.cd_animacion_caminar < 100 && this.cd_animacion_caminar < 0) {

                this.imagen_derecha.src = "./img/anim_caminar_derecha_6.png";
            }
        }

    }


    dibujar(context){
    
     


            if (this.direccion == "izquierda") {
                context.drawImage(this.imagen_izquierda, this.x, this.y, this.imagen_izquierda.naturalWidth/3, this.imagen_izquierda.naturalHeight/3); 
            }
    
            if (this.direccion == "derecha") {
    
    
                context.drawImage(this.imagen_derecha, this.x, this.y,  this.imagen_izquierda.naturalWidth/3, this.imagen_izquierda.naturalHeight/3);
    
    
    
                // context.save();
                // context.translate(canvas.width, 0);
                // context.scale(-1, 1);
                // context.drawImage(this.imagen_izquierda , this.x, this.y); 
                // context.restore();
            }
        

        
    
    }






    
    controles () {
       

        if (Teclas[tecla.letra_d] == true) {
            //Derecha    
            
                  


            this.x += 4;

         

            
           

          
        }
    
        if (Teclas[tecla.letra_a] == true ) {
            //Izquierda
              
            this.x -=4;

            
           
            
        }
    
        if (Teclas[tecla.letra_w] == true && this.y == 400) {
            //arriba   
            this.y -=80; 
            
        }
    
        //Gravedad del player
        // if (this.y < 407){
        //     this.y += 3.85; 
    
        // }


        if (this.y < 400 ) {

            if (this.gravitySpeed < 9) {
                
                this.gravitySpeed += this.gravity;
            }
          
            this.x += this.speedX;
            this.y += Math.floor(this.speedY + this.gravitySpeed);
           

        }

        else if (this.y >= 400 && this.gravitySpeed > 0) {


            this.gravitySpeed = 0;
            this.y = 400;

        }
    

    }


}
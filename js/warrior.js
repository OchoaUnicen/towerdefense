class Warrior {

    constructor() {


        this.imagen = new Image();
        this.imagen.src = "./img/mobs/warrior/anim_caminar_derecha_1.png";
        this.x = 0;
        this.y = 87;
        this.direccion = "derecha";
        this.estado = "quieto";
        this.cd_animacion_caminar = 600;
        this.estado_animacion = "decreciente";
        
    }

    setEstado (estado) {
        this.estado = estado;
    }

    getEstado () {

        return this.estado;
    }


    dibujar(context) {
        context.drawImage(this.imagen, this.x, this.y, this.imagen.naturalWidth/3, this.imagen.naturalHeight/3);
    }


    animar() {

        const velocidadAnimacion = 15;
        if(this.estado_animacion == "decreciente"){
            this.cd_animacion_caminar -= velocidadAnimacion;
        } else if (this.estado_animacion == "creciente") {
            this.cd_animacion_caminar += velocidadAnimacion;

        }

        

        if (this.direccion == "izquierda") {

            if (this.cd_animacion_caminar <= 600 && this.cd_animacion_caminar > 500) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_izquierda_1.png";
            }
            if (this.cd_animacion_caminar < 500  && this.cd_animacion_caminar < 400) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_izquierda_2.png";
            }
            if (this.cd_animacion_caminar < 400 && this.cd_animacion_caminar < 300) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_izquierda_3.png";
            }
            if (this.cd_animacion_caminar < 300 && this.cd_animacion_caminar < 200) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_izquierda_4.png";
            }
            if (this.cd_animacion_caminar < 200 && this.cd_animacion_caminar < 100) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_izquierda_5.png";
            }
            if (this.cd_animacion_caminar < 100 && this.cd_animacion_caminar < 0) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_izquierda_6.png";
            }



            

        }

        else if (this.direccion == "derecha") {

            

            if (this.cd_animacion_caminar < 600 && this.cd_animacion_caminar > 500) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_derecha_1.png";
            }
            if (this.cd_animacion_caminar < 500  && this.cd_animacion_caminar < 400) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_derecha_2.png";
            }
            if (this.cd_animacion_caminar < 400 && this.cd_animacion_caminar < 300) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_derecha_3.png";
            }
            if (this.cd_animacion_caminar < 300 && this.cd_animacion_caminar < 200) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_derecha_4.png";
            }
            if (this.cd_animacion_caminar < 200 && this.cd_animacion_caminar < 100) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_derecha_5.png";
            }
            if (this.cd_animacion_caminar < 100 && this.cd_animacion_caminar < 0) {

                this.imagen.src = "./img/mobs/warrior/anim_caminar_derecha_6.png";
            }
        }
    
        

        if(this.cd_animacion_caminar <= 25 ) {

            this.estado_animacion = "creciente";

        }

        if (this.cd_animacion_caminar >= 525) {

            this.estado_animacion = "decreciente";
        }


    }

    avanzar() {
        
        //  const moveSpeed = 0.189;
         const moveSpeed = 0.75;
        //const moveSpeed = 2;

                if (this.x < 196) {
                    this.x +=moveSpeed;
                }
                if (this.x >= 196 && this.x < 209 && this.y < 270)  {
                    this.y += moveSpeed;
                }
            
                if (this.y >= 270 && this.x < 360) {
                    this.x +=moveSpeed;
                }
                if (this.y <= 271 && this.x >= 360 && this.x < 454) {
                    this.x +=moveSpeed/2;
                    this.y -=moveSpeed/2;
                }
                if (this.x >= 454 && this.y >= 175 && this.x <=554) {
                    this.x +=moveSpeed;
                }
                if (this.x >= 554 && this.x < 638 && this.y >= 175 && this.y <= 259 && this.direccion == "derecha") {
                    this.x += moveSpeed/2;
                    this.y += moveSpeed/2;
                }
                 if(this.x >= 637  && this.y >=258 && this.y < 269 ) {
                    // && this.x >=600
                    if (this.direccion == "derecha") {
                        this.direccion = "izquierda";
                    }
                }
                if (this.x >= 618 && this.y >= 258 && this.direccion == "izquierda") {

                    this.x -=moveSpeed/12;
                    this.y +=moveSpeed/2;
                }

                if (this.x >=617 && this.y >= 373 && this.x <= 635) {

                    this.direccion = "derecha";
                }

                if (this.x >=617 && this.y >= 373  && this.y <=394 && this.direccion == "derecha") {

                    this.x +=moveSpeed/2;
                    this.y +=moveSpeed/2;
                }

                if (this.x >= 632 && this.y >= 394 && this.x <= 1000) {

                    this.x += moveSpeed/2;
                }

                if (this.x >= 1000) {

                    this.x =0;
                    this.y = 87;

                }
  
        //console.log("x: "+this.x +" y: "+ this.y, this.direccion);
        
        
        

        this.animar();
        


    }

}
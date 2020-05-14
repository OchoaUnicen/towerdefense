class Builder {

    constructor() {

        this.x = 30;
        this.y = 350;
        this.container = new Image();
        this.container.src = "./img/interfaz/contenedor_torres.png";
        this.torre_rapida = new Image();
        this.torre_rapida.src = "./img/torres/torre_rapida.png";
        this.torre_rapida_x = 35;
        this.torre_rapida_y = 355;
        this.torre_lenta = new Image();
        this.torre_lenta.src = "./img/torres/torre_lenta.png";
        this.torre_relentizadora = new Image();
        this.torre_relentizadora.src = "./img/torres/torre_relentizadora.png";
        this.torre_rapida_estado = "unselected";
        this.torre_lenta_estado = "unselected";
        this.torre_relentizadora_estado = "unselected";
        this.mostrar_construcciones_posibles = false;
    }


    serMostrarConstruccionesPosibles(estado){

        this.mostrar_construcciones_posibles = estado;

    }

    marcarPosiblesConstrucciones (torreSeleccionada) {

        if (torreSeleccionada == "torre_rapida" && this.torre_rapida_estado == "selected") {
    
                this.mostrar_construcciones_posibles = true;
    
                
           // this.dibujarPosiblesConstrucciones(this.torre_rapida_x, this.torre_rapida_y, context);

        }
    
    
    }

    getMostrarConstruccionesPosibles() {

        return this.mostrar_construcciones_posibles;
    }


    //if this.mostrar_construcciones_posibles == true;
    dibujarPosiblesConstrucciones(torreSeleccionada_x, torreSeleccionada_y, context) {


        context.fillRect(torreSeleccionada_x, torreSeleccionada_y, 100, 100);


    }

    setPosicionTorre(torre, torre_x, torre_y){

        switch (torre) {
            case "torre_rapida":
                this.torre_rapida_x = torre_x;
                this.torre_rapida_y = torre_y;
                break;
                // case "torre_lenta":
                // this.torre_lenta_estado = estado;
                // break;
                // case "torre_relentizadora":
                // this.torre_relentizadora_estado = estado;
                // break;
        }
        

    }


    setEstado(torre, estado) {
       switch(torre) {
           case "torre_rapida":
            this.torre_rapida_estado = estado;
            break;
            case "torre_lenta":
            this.torre_lenta_estado = estado;
            break;
            case "torre_relentizadora":
            this.torre_relentizadora_estado = estado;
            break;

       }
    }

    getEstado (torre) {

        switch(torre) {

            case "torre_rapida":
               return this.torre_rapida_estado;
                break;
                case "torre_lenta":
                return this.torre_lenta_estado;
                break;
                case "torre_relentizadora":
                return this.torre_relentizadora_estado;
                break;
    
        }

    }

    getTorreRapidaX(){

        return this.x+5;
    }

    getTorreRapidaY(){

        return this.y+5
    }

    mostrar(context) {


        context.drawImage(this.container, this.x, this.y, 400, 150);
        context.drawImage(this.torre_rapida, this.torre_rapida_x,this.torre_rapida_y);
        context.drawImage(this.torre_lenta, this.x + 130,this.y+5);
        context.drawImage(this.torre_relentizadora, this.x + 260,this.y+5);
    }



}
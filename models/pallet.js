class Pallet {

  constructor(){
    this.width = 120;
    this.height = 10;
    this.coordX = (settings.canvasWidth / 2) - 60;
    this.speedX = 0;
    document.addEventListener('keydown', this.move, false)
  }

  draw(ctx){
    ctx.beginPath();
    ctx.rect(this.coordX, settings.canvasHeight - this.height , this.width, this.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  move(event){
    if(event.keyCode == 37){
      console.log('Izquierda');
    }
    else if(event.keyCode == 39){
      console.log('Derecha');
    } else{
      console.log('No se ha movido');
    }
  }

  /**
   * Método encargado de cambiar attr speed_x para posteriormente
     dibujar la paleta en la pantalla con cordenada diferente ( Hacia la derecha )
   */
  moveRight(){

  }

  /**
  * Método encargado de cambiar attr speed_x para posteriormente
   dibujar la paleta en la pantalla con cordenada diferente ( Hacia la izquierda )
  */
  moveLeft(){

  }

  /**
   * Método que conserva la posición actual de la coordenada en X
   */
  dontMove(){
    this.speedX = 0;
  }
}
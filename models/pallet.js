class Pallet {

  constructor(){
    this.width = 120;
    this.height = 10;
    this.coordX = (settings.canvasWidth / 2) - 60;
    this.speedX = 10;
    document.addEventListener('keydown',  (e) => this.move(e), false)
  }

  draw(ctx){
    ctx.beginPath();
    ctx.rect(this.coordX, settings.canvasHeight - this.height , this.width, this.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  move(event){
    switch (event.keyCode){
      case 37:
        this.moveLeft();
      break;
      case 39:
        this.moveRight();
      break;
    }
  }

  /**
   * Método encargado de cambiar attr speed_x para posteriormente
     dibujar la paleta en la pantalla con cordenada diferente ( Hacia la derecha )
   */
  moveRight(){
    if(this.coordX <= 350){
      this.coordX += this.speedX;
    }
  }

  /**
  * Método encargado de cambiar attr speed_x para posteriormente
   dibujar la paleta en la pantalla con cordenada diferente ( Hacia la izquierda )
  */
  moveLeft(){
    if(this.coordX >= 10){
      this.coordX -= this.speedX;
    }
  }
}
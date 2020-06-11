class Ball {

  constructor() {
    this.coordX = settings.canvasWidth / 2;
    this.coordY = settings.canvasHeight - 30;
    this.speedX = 2;
    this.speedY = -2;
    this.ballRadius = 10;
  }

  /**
   * Método que dibuja el circulo
   * @param {} ctx
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.coordX, this.coordY, this.ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  /**
   * Método que mueves las coordenadas de la pelota en cada loop
   */
  move(){
    if(this.coordX >= (settings.canvasWidth -10) || this.coordX <= 10){
      this.collideX();
    }
    if(this.coordY <= 10){
      this.collideY();
    }
    this.coordX += this.speedX;
    this.coordY += this.speedY;
  }

  /**
   * Revierte la dirección del eje y
   */
  collideY(){
    this.speedY = this.speedY * -1;
  }

  /**
   * Revierte la dirección del eje x
   */
  collideX(){
    this.speedX = this.speedX * -1;
  }
}
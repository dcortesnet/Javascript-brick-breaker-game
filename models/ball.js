class Ball {

  /**
   * Se indica las posiciones actuales en las coords X e Y del canvas en donde la pelota iniciará
   * Se indica la velocidad que cambiará la pelota en pixeles
   * Se indica el radio de la pelota
   * @param {number} initialXPosition 
   * @param {number} initialYPosition 
   * @param {number} speedX 
   * @param {number} speedY 
   * @param {number} ballRadius
   */
  constructor(initialXPosition, initialYPosition, speedX=2, speedY=-2, ballRadius=10) {
    this.coordX = initialXPosition;
    this.coordY = initialYPosition;
    this.speedX = speedX;
    this.speedY = speedY;
    this.ballRadius = ballRadius;
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
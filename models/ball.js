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
   * Además suma + speedX y speedY a la posición actual del circulo X e Y
   * @param {} ctx
   */
  updateBall(ctx) {
    ctx.beginPath();
    ctx.arc(this.coordX, this.coordY, this.ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    // Se debe sumar ya que cada vez que se pinte se moverá 3 pixeles por defecto en vertical y horizontal
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
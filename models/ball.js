class Ball {

  /**
   * Se indica las posiciones actuales en las coords X e Y del canvas en donde la pelota iniciará
   * Se indica la velocidad que cambiará la pelota en pixeles
   * @param {number} initialXPosition 
   * @param {number} initialYPosition 
   * @param {number} speedX 
   * @param {number} speedY 
   */
  constructor(initialXPosition, initialYPosition, speedX=2, speedY=-2) {
    this.coordX = initialXPosition;
    this.coordY = initialYPosition;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  /**
   * Método que dibuja el circulo
   * Además suma + speedX y speedY a la posición actual del circulo X e Y
   * @param {} ctx
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.coordX, this.coordY, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    // Se debe sumar ya que cada vez que se pinte se moverá 3 pixeles por defecto en vertical y horizontal
    this.coordX += this.speedX;
    this.coordY += this.speedY;
    console.log(this.coordX);
    console.log(this.coordY);
  }

  collideY(){
    
  }

  collideX(){

  }
}
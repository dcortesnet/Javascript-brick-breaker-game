class Brick {
  
  constructor() {
    this.width = 40;
    this.height = 10;
  }

  /**
   * Método que dibuja el ladrillo en X e Y
   * @param {*} ctx 
   * @param {number} positionX 
   * @param {number} positionY 
   */
  draw(ctx, positionX, positionY){
    ctx.beginPath();
    ctx.rect(positionX, positionY , this.width, this.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}
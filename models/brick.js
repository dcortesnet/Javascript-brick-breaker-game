class Brick {
  
  constructor() {
    // 480 / 40 = 12
    this.width = 40; // 40 es el ancho del ladrillo
    this.height = 20; // Número a medida
  }

  /**
   * Método que dibuja el ladrillo en X e Y
   * @param {*} ctx 
   * @param {number} positionX 
   * @param {number} positionY 
   */
  draw(ctx, positionX, positionY){
    ctx.beginPath();
    ctx.rect(positionX, positionY, this.width, this.height);
    ctx.fillStyle = "#0095DD";
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
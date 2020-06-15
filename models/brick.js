class Brick {
  
  constructor(coordX, coordY) {
    // 480 / 40 = 12
    this.coordX = coordX;
    this.coordY = coordY;
    this.width = 40; // 40 es el ancho del ladrillo
    this.height = 20; // Número a medida
  }

  /**
   * Método que dibuja el ladrillo en X e Y
   * @param {*} ctx 
   */
  draw(ctx){
    ctx.beginPath();
    ctx.rect(this.coordX, this.coordY, this.width, this.height);
    ctx.fillStyle = "#0095DD";
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
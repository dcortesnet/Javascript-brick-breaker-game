class Point {
  constructor() {
    this.points = 0;
  }

  /**
   * Método que dibuja los puntos
   * @param {*} ctx 
   */
  draw(ctx){
    ctx.font = "15px Arial";
    ctx.fillText(`Puntos : ${this.points}`, 10, 20);
  }
}
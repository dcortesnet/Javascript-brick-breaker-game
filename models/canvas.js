class Canvas {

  constructor(secondsToUpdate=10) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.secondsToUpdate = secondsToUpdate;
    this.ball = new Ball(this.canvas.width / 2, this.canvas.height - 30); 
  }

  /**
   * Método para dibujar la pelota
   */
  drawBall() {
    this.ball.draw(this.ctx);
  }

  /**
   * Método para limpiar el lienzo
   */
  cleanCanvas(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }

  /**
   * Método para actualizar el canvas en cada fotograma
   */
  updateCanvas(){
    setInterval(() => {
      
      this.cleanCanvas();
      this.drawBall();


    }, this.secondsToUpdate);
  }
}

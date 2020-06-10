class Game {

  /**
   * Se indica cada cuantos milisegundos debe actualizar el canvas
   * @param {number} timeUpdate 
   */
  constructor(timeUpdate=15) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.timeUpdate = timeUpdate;
    this.ball = new Ball(settings.canvasWidth / 2, settings.canvasHeight - 30);
    this.pallet = new Pallet()
  }

  run(){
    setInterval(() => {
      this.cleanCanvas();
      this.ball.draw(this.ctx);
      this.pallet.draw(this.ctx);
      this.ball.move();
    }, this.timeUpdate);
  }

  /**
   * Método para limpiar el lienzo
   */
  cleanCanvas(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }
}

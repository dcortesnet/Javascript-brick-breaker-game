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
    this.interval = setInterval(() => {
      this.cleanCanvas();
      this.ball.draw(this.ctx);
      this.pallet.draw(this.ctx);
      this.ball.move();
      this.checkCollideBallPallet();
      this.checkEndGame();
    }, this.timeUpdate);
  }

  /**
   * Método para limpiar el lienzo
   */
  cleanCanvas(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }

  /**
   * Método de verificación si la pelota colisionó con la paleta
   * Sí colisionó revierte el eje Y de la pelota
   */
  checkCollideBallPallet(){
    if(this.ball.coordY >= 310 && this.ball.coordX >= this.pallet.coordX && this.ball.coordX <= (this.pallet.coordX + this.pallet.width)){
      this.ball.collideY();
    }
  }
  
  /**
   * Método de verificación si termino el juego
   */
  checkEndGame(){
    if(this.ball.coordY >= settings.canvasHeight){
      this.finishGame('Juego perdido');
    }
  }

  /**
   * Método de visualización de finalización del juego
   * @param {string} message 
   */
  finishGame(message){
    alert(message);
    clearInterval(this.interval)
    location.reload();
  }
}

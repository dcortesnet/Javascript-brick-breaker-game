class Game {

  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.timeUpdate = 15;
    this.ball = new Ball();
    this.pallet = new Pallet();
    this.point = new Point();
  }

  /**
   * Método principal del juego, loop principal
   */
  run(){
    this.interval = setInterval(() => {
      this.cleanCanvas();
      this.ball.draw(this.ctx);
      this.pallet.draw(this.ctx);
      this.point.draw(this.ctx);
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

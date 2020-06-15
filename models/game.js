class Game {

  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = settings.canvasWidth;
    this.canvas.height = settings.canvasHeight;
    this.ctx = this.canvas.getContext('2d');
    this.timeUpdate = 12;
    this.ball = new Ball();
    this.pallet = new Pallet();
    this.point = new Point();
    this.wall = new Wall();
  }

  /**
   * Método principal del juego, loop principal
   */
  run(){
    this.interval = setInterval(() => {
      this.cleanCanvas();
      this.wall.draw(this.ctx);
      this.ball.draw(this.ctx);
      this.pallet.draw(this.ctx);
      this.point.draw(this.ctx);
      this.ball.move();
      this.checkCollideBallInWall();
      this.checkCollideBallPallet();
      this.checkWinGame();
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
   * Método que comprueba las coliciones en que eje fúe para cambiar la dirección de la pelota
   * destruyendo el ladrillo afectado en el muro
   * 
   * Detección de colisión manual:
   *  La posición "x" de la bola es mayor que la posición "x" del ladrillo
   *  La posición "x" de la bola es menor que la posición del ladrillo más el ancho del ladrillo
   *  La posición "y" de la bola es mayor que la posición "y" del ladrillo.
   *  La posición "y" de la bola es menor que la posición del ladrillo más su altura.
   */
  checkCollideBallInWall(){
    // Se debe recorrer todo comprobando las pos de cada ladrillo
    for (let index = 0; index < this.wall.bricks.length; index++) {
      const brick = this.wall.bricks[index];
      
      if(this.ball.coordX >= brick.coordX  && this.ball.coordX <= (brick.coordX + brick.width) && this.ball.coordY >= brick.coordY && this.ball.coordY <= (brick.coordY + brick.height)){
        // Revertir la pelota
        this.ball.collideX();
        this.ball.collideY();
        this.wall.bricks.splice(index, 1);
        this.point.points += 10;
        // Eliminar el bloque 
      }
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

  checkWinGame(){
    if(this.point.points == (this.wall.bricks.length * 10)){
      this.finishGame('Juego ganado');
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

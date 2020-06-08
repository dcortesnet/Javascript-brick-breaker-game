class Canvas {

  constructor(secondsToUpdate=10) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.secondsToUpdate = secondsToUpdate;
    this.ball = new Ball(this.canvas.width / 2, this.canvas.height - 30); 
  }

  /**
   * Método para limpiar el lienzo
   */
  cleanCanvas(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }

  /**
   * Método que detecta colisiones para cambiar ejes de la pelota
   */
  checkCollideBall(){
    // 1 Detectar colisión entre el eje x del canvas y la pelota x
    if(this.ball.coordX >= (this.canvas.width -10) || this.ball.coordX <= 10){
      this.ball.collideX();
    }

    // 2. Detectar colisión entre el eje y del canvas y la pelota y
    if(this.ball.coordY >= (this.canvas.height -10) || this.ball.coordY <= 10){
      this.ball.collideY();
    }
  }

  /**
   * Método para actualizar el canvas en cada fotograma
   */
  updateCanvas(){
    setInterval(() => {
      
      this.cleanCanvas();
      this.ball.updateBall(this.ctx);
      this.checkCollideBall();

    }, this.secondsToUpdate);
  }
}

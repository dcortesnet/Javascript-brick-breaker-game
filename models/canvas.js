class Canvas {

  constructor(secondsToUpdate=10) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.secondsToUpdate = secondsToUpdate;
    
    this.ball = new Ball(this.canvas.width / 2, this.canvas.height - 30); 
  }

  drawBall() {
    this.ball.draw(this.ctx);
  }

  updateCanvas(){
    setInterval(() => {
      this.drawBall()
    }, this.secondsToUpdate);
  }
}

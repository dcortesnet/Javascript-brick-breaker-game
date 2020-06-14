class Wall {

  constructor(){
    this.row = 3; // cantidad de filas a dibujar
    this.column = 12; // cantidas de columnas
    this.bricks = [] // Array de instancias de ladrillos
    // 480 / 40 = 12 columnas
    // 40 ancho del ladrillo
    this.buildWall();
  }

  /**
   * Método que construira el muro por primera vez
   */
  buildWall(){
    let positionX = 0;
    let positionY = 10;
    for (let row = 0; row < this.row; row++) {
      positionY += 20;
      positionX = 0;
      for (let column = 0; column < this.column; column++) {
        const brick = new Brick(positionX, positionY);
        this.bricks.push(brick);
        positionX += brick.width;
      }
    }
  }

  /**
   * Método para construir la muralla estimada con 4 filas y 46 columnas
   * Se deja un espacio de 10px
   * @param {*} ctx 
   */
  draw(ctx){
    console.log(this.bricks);
    for (let index = 0; index < this.bricks.length; index++) {
      const brick = this.bricks[index];
      brick.draw(ctx);
    }
  }
}
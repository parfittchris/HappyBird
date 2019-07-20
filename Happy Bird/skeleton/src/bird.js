
class Bird {
  constructor(canvas) {
    this.velocity = 0
    this.dimensions = canvas;
    this.y = this.dimensions.height / 2;
    this.x = this.dimensions.width / 3;
  }


  drawbird(ctx){
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGTH)
  }

  move() {
    this.y += this.velocity
    this.velocity += CONSTANTS.GRAVITY;
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

  getBounds() {
    let bounds = {
      topLeft: [this.x, this.y],
      bottomRight: [this.x + CONSTANTS.BIRD_WIDTH, this.y + CONSTANTS.BIRD_HEIGTH],
    }

    return bounds
  }

  animate(ctx) {
    this.move();
    this.drawbird(ctx);
  }

}

const CONSTANTS = {
  GRAVITY: 0.4,
  FLAP_SPEED: -8,
  TERMINAL_VELOCITY: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGTH: 30
}


export default Bird;
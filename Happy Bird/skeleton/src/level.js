import Bird from "./bird";

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [
      { x: 400, y: this.generateGap(), passed: false},
      { x: 620, y: this.generateGap(), passed: false},
      { x: 840, y: this.generateGap(), passed: false},
    ];
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
  

  collidesWith(bounds) {
    let ltx = bounds.topLeft[0];
    let lty = bounds.topLeft[1];
    let over = false;
    this.pipes.forEach(pipe => {
      
      //check collision with top pipe
      if (ltx < pipe.x + PIPE_DIMS.PIPE_THICKNESS &&
          ltx + 40 > pipe.x &&
          lty < pipe.y) {
            over = true;

      //check collision with bottom pipe
      } else if (ltx < pipe.x + PIPE_DIMS.PIPE_THICKNESS &&
                 ltx + 40 > pipe.x &&
                 lty + 30 > pipe.y + 150) {
            over = true;
      }
      //check bird outside page
      else if (lty + 30 < 0 || lty > 640) {
            over = true;
      }
    });
    return over;
  }
  
  updateScore(bounds) {
    let score = false
    if (bounds.topLeft[0] > this.pipes[0].x + 50 && !this.pipes[0].passed) {
      this.pipes[0].passed = true;
      score = true;
    }
    return score
  }

  //CREATE PIPES

  generateNewPipe() {
    return {x: (this.pipes[2].x + PIPE_DIMS.PIPE_BETWEEN), y: this.generateGap(), passed: false}
  }
  
  generateGap() {
    return Math.floor((Math.random() * 335) + 65);
  }
  
  drawPipes(ctx) {
    let pthick = PIPE_DIMS.PIPE_THICKNESS;
    
    ctx.fillStyle = "green";
    this.pipes.forEach(pipe => {
      ctx.fillRect(pipe.x, 0, 50, pipe.y);
      ctx.fillRect(pipe.x, pipe.y + PIPE_DIMS.PIPE_GAP, pthick, 1000);
    });
  }
  
  movePipes() {
    this.pipes.forEach (el => {
      el.x -= 1;
      if (el.x < PIPE_DIMS.PIPE_THICKNESS * -1) {
        this.pipes.push(this.generateNewPipe());
        this.pipes.shift();
      }
    });
  }

  //ANIMATE
  animate(ctx) {
    this.drawBackground(ctx);
    this.movePipes(ctx);
    this.drawPipes(ctx);
  }

}

const PIPE_DIMS = {
  PIPE_THICKNESS: 50,
  PIPE_GAP: 150,
  PIPE_BETWEEN: 220,
}
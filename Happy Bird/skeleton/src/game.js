import Level from './level';
import Bird from './bird';

export default class Game {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.events();
    this.restart();
    this.score = 0
  }

  showScore(ctx, score) {
    ctx.font = "40px Georgia";
    ctx.fillText("Score: " + score, 10, 50);
  }
  
  play() {
    this.running = true;
    this.animate();
  }

  events() {
    this.ctx.canvas.addEventListener('mousedown', this.click.bind(this));
  }

  updateScore() {
    if (this.level.updateScore(this.bird.getBounds())) this.score += 1;
  }

  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    this.updateScore();
    this.showScore(this.ctx, this.score)
    this.stillPlaying();
    if (this.running === true) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }
  
  restart() {
    this.running = false;
    this.score = 0;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate();
  }

  click(e) {
    if (!this.running) {
      this.play();
    } else {
      this.bird.flap();
    }
  }

  stillPlaying() {
    // debugger
    if (this.level.collidesWith(this.bird.getBounds()) === true) {
      alert('You lose');
      this.restart();
    }
  }
  

}
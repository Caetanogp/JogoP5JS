let cracks = [];
let ball;
let gameOver = false;

function setup() {
  createCanvas(600, 400);
  ball = new Ball();
}

function draw() {
  background(220);
  
  if (gameOver) {
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text("Game Over!", width / 2, height / 2);
    return;
  }
  
  ball.update();
  ball.display();
  
  for (let i = cracks.length - 1; i >= 0; i--) {
    cracks[i].grow();
    cracks[i].display();
    
    if (cracks[i].growthTime > 100) {  // Define um limite de tempo para o crescimento
      cracks.splice(i, 1);
    }
  }
}

function mousePressed() {
  ball.shoot(mouseX, mouseY);
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height - 20;
    this.radius = 10;
    this.speedX = 0;
    this.speedY = 0;
    this.launched = false;
  }
  
  shoot(targetX, targetY) {
    let angle = atan2(targetY - this.y, targetX - this.x);
    this.speedX = cos(angle) * 5;
    this.speedY = sin(angle) * 5;
    this.launched = true;
  }
  
  update() {
    if (this.launched) {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
      
      for (let i = cracks.length - 1; i >= 0; i--) {
        if (dist(this.x, this.y, cracks[i].points[0].x, cracks[i].points[0].y) < this.radius) {
          this.reset();
        }
      }
    }
  }
  
  reset() {
    cracks.push(new Crack(this.x, this.y));
    this.launched = false;
    this.x = width / 2;
    this.y = height - 20;
  }
  
  display() {
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
}

class Crack {
  constructor(x, y) {
    this.points = [{ x, y }];
    this.growthRate = random(1, 3);
    this.growthTime = 0;  // Contador para tempo de crescimento
  }
  
  grow() {
    if (this.growthTime < 100) {  // Cresce por um tempo limitado
      let last = this.points[this.points.length - 1];
      let newX = last.x + random(-10, 10);
      let newY = last.y + random(-10, 10);
      
      if (newX > 0 && newX < width && newY > 0 && newY < height) {
        this.points.push({ x: newX, y: newY });
      }
      this.growthTime++;
    }
  }
  
  display() {
    stroke(0);
    strokeWeight(2);
    noFill();
    
    beginShape();
    for (let pt of this.points) {
      vertex(pt.x, pt.y);
    }
    endShape();
  }
}

let cracks = [];
let ball;
let gameOver = false;
let obstacles = [];

function setup() {
  createCanvas(600, 400);
  ball = new Ball();
  for (let i = 0; i < 7; i++) {
    obstacles.push(new Obstacle());
  }
}

function draw() {
  drawScenery();

  if (gameOver) {
    for (let crack of cracks) {
      crack.grow();
      crack.display();
    }

    textSize(36);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text("Game Over!", width / 2, height / 2);
    return;
  }

  for (let obs of obstacles) {
    obs.update();
    obs.display();
  }

  ball.update();
  ball.display();
}

function keyPressed() {
  if (!gameOver) {
    if (keyCode === LEFT_ARROW) ball.setDirection(-1, 0);
    else if (keyCode === RIGHT_ARROW) ball.setDirection(1, 0);
    else if (keyCode === UP_ARROW) ball.setDirection(0, -1);
    else if (keyCode === DOWN_ARROW) ball.setDirection(0, 1);
  }
}

function drawScenery() {
  background(135, 206, 235); // Céu

  // Sol
  fill(255, 204, 0);
  noStroke();
  ellipse(550, 50, 80, 80);

  // Montanhas
  fill(100, 155, 100);
  triangle(100, 300, 200, 100, 300, 300);
  triangle(300, 300, 400, 120, 500, 300);

  // Grama
  fill(34, 139, 34);
  rect(0, 300, width, 100);
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height - 40;
    this.radius = 12;
    this.speed = 3.8;
    this.dirX = 1;
    this.dirY = 0;
    this.color = color(0);
  }

  setDirection(dx, dy) {
    this.dirX = dx;
    this.dirY = dy;
  }

  update() {
    this.x += this.dirX * this.speed;
    this.y += this.dirY * this.speed;

    // Limites da tela
    this.x = constrain(this.x, this.radius, width - this.radius);
    this.y = constrain(this.y, this.radius, height - this.radius);

    for (let obs of obstacles) {
      if (obs.collidesWith(this.x, this.y, this.radius)) {
        cracks.push(new Crack(this.x, this.y)); // Gera rachadura na colisão
        gameOver = true;
      }
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
}

class Obstacle {
  constructor() {
    this.w = random(40, 60);
    this.h = random(40, 60);
    this.x = random(0, width - this.w);
    this.y = random(100, height - 120);
    this.color = color(random(150, 255), random(50, 150), 0);
    this.speedX = random([-1.5, 1.5]);
    this.speedY = random([-1.5, 1.5]);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Rebater nas bordas
    if (this.x < 0 || this.x + this.w > width) this.speedX *= -1;
    if (this.y < 0 || this.y + this.h > height) this.speedY *= -1;
  }

  display() {
    fill(this.color);
    stroke(0);
    rect(this.x, this.y, this.w, this.h, 8);
  }

  collidesWith(px, py, pr) {
    return (
      px + pr > this.x &&
      px - pr < this.x + this.w &&
      py + pr > this.y &&
      py - pr < this.y + this.h
    );
  }
}

class Crack {
  constructor(x, y) {
    this.points = [{ x, y }];
    this.growthTime = 0;
    this.color = color(random(100, 255), 0, 0);
  }

  grow() {
    if (this.growthTime < 100) {
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
    stroke(this.color);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let pt of this.points) {
      vertex(pt.x, pt.y);
    }
    endShape();
  }
}

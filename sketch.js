// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;
let value = 0;

function setup() {
  createCanvas(1000, 1000);
  ps = new ParticleSystem(200, 100, 10);
}

function draw() {
  background(250,250,50);

  ps.display();
  ps.update();
}


function mousePressed() {
  // ps.shatter();
  if (value === 0 ) {
    value = 1;
  } else {
    value = 5;
  }
}

shatter() {
  for (let particle of this.particles) {
    let force = p5.Vector.random2D();
    force.mult(value);
    particle.applyForce(force);
  }
  // this.intact = false;
}

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

  if (value === 0 ) {
    ps.shatter();
    value = 1;
    } else {
    value = 5;
    }
  }
    ps.shatter();
}

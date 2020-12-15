// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Using Generics now!  comment and annotate, etc.

class ParticleSystem {


  constructor(x, y, r) {
    this.particles = [];
    // this.intact = true;
    let rows = 50;
    let cols = 50;
    for (let i = 0; i < rows * cols; i++) {
      this.addParticle(x + (i % cols) * r, y + (floor(i / rows)) * r, r);
    }
  }

  addParticle(x, y, r) {
    this.particles.push(new Particle(x, y, r));
  }

  display() {
    for (let particle of this.particles) {
       let force = p5.Vector.random2D();
      force.mult(value);
      particle.applyForce(force);
      particle.display();
    }
  }


  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }
}

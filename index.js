// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(newCircumference) {
    this.radius = newCircumference / (2 * Math.PI);
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  set area(newArea) {
    this.radius = Math.pow(newArea / Math.PI, 0.5)
  }
}

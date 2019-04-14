// Add your Circle class here

class Circle {

  constructor(radius) {
    this.radius = radius;
  }

  // Getter Methods

  get diameter() {
    return this.radius * 2;
  }

  get area() {
    return (this.radius ** 2) * Math.PI;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  // Setter Methods

  set diameter(num) {
    this.radius = num / 2;
    return num;
  }

  set area(num) {
    this.radius = Math.sqrt(num) / Math.PI;
    return num;
  }

  set circumference(num) {
    this.radius = num / Math.PI / 2;
    return num;
  }

}

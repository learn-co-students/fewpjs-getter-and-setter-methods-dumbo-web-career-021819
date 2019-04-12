// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    };
    set diameter(num) {
        this.radius = num / 2;
        return num
    };

    get circumference() {
        return this.diameter * Math.PI;
    };
    set circumference(num) {
        this.radius = num / Math.PI / 2;
        return num;
    }

    get area() {
        return (this.radius ** 2) * Math.PI;
    };
    set area(num) {
        this.radius = Math.sqrt(num) / Math.PI;
        return num
    }
}
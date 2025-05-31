class Shape {
    calculateArea() {
        return 0;
    }
}

class Triangle extends Shape {
    constructor(a, ha) {
        super();
        this.a = a;
        this.ha = ha;
    }
    calculateArea() {
        return (this.a * this.ha) / 2;
    }
}

class Square extends Shape {
    constructor(a) {
        super();
        this.a = a;
    }
    calculateArea() {
        return this.a * this.a;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }
    calculateArea() {
        return (Math.PI * this.r * this.r).toFixed(2);
    }
}

const t = new Triangle(4, 5);
const s = new Square(5);
const c = new Circle(5);

console.log(t.calculateArea());
console.log(s.calculateArea());
console.log(c.calculateArea());
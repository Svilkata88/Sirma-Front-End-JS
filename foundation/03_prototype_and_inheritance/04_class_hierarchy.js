function createClasses() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        get area() {
            return 0;
        }
        changeUnit(newUnits) {
            this.units = newUnits
        }
        toString() {
            return `Figure units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }   
        get area() {
            return (Math.PI * this.radius * this.radius).toFixed(2);
        }
        toString() {
            return `Circle units: ${this.units}`
        }
    }

    class Rectangle extends Figure {
        constructor(a, b, units) {
            super(units);
            this.a = a;
            this.b = b;
        }
        get area() {
            return this.a * this.b;
        }
        toString() {
            return `Rectangle units: ${this.units}`;
        }
    }

    return {Figure, Circle, Rectangle};
}

const {Figure, Circle, Rectangle} = createClasses();
const c = new Circle(5);
console.log(c);
console.log(c.area);
console.log(c.toString());
const r = new Rectangle(5,4, 'mm');
console.log(r);
console.log(r.area);
console.log(r.toString());
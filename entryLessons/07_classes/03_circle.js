class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }
    
    get diameter() {
        return this._radius * 2;
    }

    get area() {
        
    }

    set radius(r) {
        this._radius = r;
    }
}


const c1 = new Circle(2);
c1.radius = 3;
console.log(c1.diameter);
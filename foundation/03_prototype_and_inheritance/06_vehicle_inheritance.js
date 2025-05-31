class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model, doors, color) {
        super(make, model); 
        this.doors = doors;
        this.color = color;
    }
}

class Byle extends Vehicle {
    constructor(make, model, type, color) {
        super(make, model); 
        this.type = type;
        this.color = color;
    }
}
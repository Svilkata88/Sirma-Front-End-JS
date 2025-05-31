class Device {
    constructor(brand, model, batteryLife=100) {
        this.brand = brand;
        this.model = model;
        this.batteryLife = batteryLife;
        this.isOn = false;
    }
    charge() {
        this.batteryLife = 100;
        console.log('Battery is fully charged!')
    }
    turnOn() {
        this.isOn = true;
    }
}

class Smartphone extends Device {
    constructor(brand, model, batteryLife, screenSize, os) {
        super(brand, model, batteryLife);
        this.screenSize = screenSize;
        this.os = os;
    }
    charge() {
        this.batteryLife = 100;
        console.log('Battery is fully charged! Charging time: 5h!')
    }
}

class Smartwatch extends Device {
    constructor(brand, model, batteryLife, strapMaterial, waterResistance) {
        super(brand, model, batteryLife);
        this.strapMaterial = strapMaterial;
        this.waterResistance = waterResistance;
    }
    charge() {
        this.batteryLife = 100;
        console.log('Battery is fully charged! Charging time: 3h!')
    }
}
class Animal {
    constructor(name, age) {
        this.name =name;
        this.age = age;
    }

    eat() {
        return `${this.name} eats...`
    }

    sleep() {
        return `${this.name} sleeps... zZz`
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    bark() {
        return `${this.name} barks... bow bow`
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }   
    
    meow() {
        return `${this.name} making sound meow... meow, meow`
    }
}
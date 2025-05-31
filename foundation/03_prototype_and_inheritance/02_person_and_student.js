class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
}

const p = new Person('Svilen', 37);
const s = new Student('Peter', 25, 'Otec Paisii');

console.log(p);
console.log(s);
class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

function extendsProto(cls) {
    cls.prototype.species = "Human";
    cls.prototype.toSpeciesString = function() {
        return "I'am a " +  cls.prototype.species;
    }
}

extendsProto(Person);
const p = new Person('Svil', 25);
console.log(p.species);
console.log(p.toSpeciesString());
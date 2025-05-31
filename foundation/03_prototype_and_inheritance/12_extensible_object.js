function extensibleObj() {};

extensibleObj.prototype.extend = function(template) {
    for ( let key in template ) {
        if ( typeof template[key] === 'function' ) {
            Object.getPrototypeOf(this)[key] = template[key];
        }
        else {
            this[key] = template[key];
        }
    }
};


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
const animal = new Animal('Kuncho', 5);

ext = new extensibleObj;
ext.extend(animal);
// ext.name = 'Bau Bau'
console.log(ext.name);
class Cat {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says meow`);
    }
};



function cats(array) {
    for ( let cat of array ) {
        const [catName, catAge] = cat.split(' ');
        const catObj = new Cat(catName, catAge);
        catObj.meow();
    }
};

cats(['Mellon 2', 'Tom 3']);
cats(['Branch 1', 'Poppy 3', 'Goldy 2']);
function* infiniteGen() {
    let index = 1;
    while (true) {
        yield index;
        index++;
    }
}

const gen = infiniteGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
function* powerOfTwo() {
    let i = 0;

    while ( true ) {
        yield 2**i;
        i++;
    }
}

let gen = powerOfTwo();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
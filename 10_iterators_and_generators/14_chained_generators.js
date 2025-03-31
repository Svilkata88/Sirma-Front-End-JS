function chainedGens(gen1, gen2) {
    let nextVal = gen1.next();
    while (!(nextVal.done)) {
        console.log(nextVal.value);
        nextVal = gen1.next();
    }
    nextVal = gen2.next();
    while (!(nextVal.done)) {
        console.log(nextVal.value);
        nextVal = gen2.next();
    }
}

function* genOne() {
    yield 1
    yield 2
}

function* genTwo() {
    yield 3
    yield 4
}

const gen1 = genOne();
const gen2 = genTwo();

chainedGens(gen1, gen2);


function* repeatGen(val, reps) {
    for ( let i = 0; i<reps; i++) {
        yield val;
    }
}

const gen = repeatGen(2, 5);
console.log(...gen);
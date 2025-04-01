function* patternGen(pattern, reps) {
    for ( i = 0; i < reps; i++ ) {
        yield pattern.map(el => el);
    }
};

const gen = patternGen([1, 2, 3], 3);
let nextVal;
while ( !( nextVal = gen.next()).done ) {
    console.log(...nextVal.value);
}
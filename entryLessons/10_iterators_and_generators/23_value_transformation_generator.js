function* valueTransformer(values, func) {
    for ( let el of values ) {
        yield func(el);
    }
}

const func = x => x * 2;
const values = [1, 2, 3];
const gen = valueTransformer(values, func);


console.log(...gen);
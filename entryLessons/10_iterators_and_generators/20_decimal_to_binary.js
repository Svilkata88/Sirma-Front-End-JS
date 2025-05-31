function* decimalToBinary(n) {
    yield n.toString(2);
}

const gen = decimalToBinary(15);
console.log(gen.next().value);
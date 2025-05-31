function partialSum(n) {
    return (a, b, c) => {
        return n + a + b + c;
    }
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3));
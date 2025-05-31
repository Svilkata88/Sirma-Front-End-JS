function double(num) {
    return num * 2;
}

function square(num) {
    return Math.pow(num, 2);
}

function compose(func1, func2) {
    return function(n) {
        return func2(func1(n));
    };
}

const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3)); // Output: 100
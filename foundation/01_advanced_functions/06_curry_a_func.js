function multiply(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    }
}

console.log(multiply(2)(3)(4));
// console.log(multiply(2));
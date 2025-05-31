Array.prototype.first = function() {
    return this[0];
}

Array.prototype.skip = function(n) {
    return this.slice(n);
}

Array.prototype.take = function(n) {
    return this.slice(0, n);
}

Array.prototype.product = function() {
    const product = arr.reduce((acc, el ) => acc * el, 1);
    return product;
}

Array.prototype.unique = function(n) {
    return [...new Set(this)];
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 10, 1, 2, 3, 2, 3]
// console.log(arr.take(3));
// console.log(arr.skip(3));
// console.log(arr.product());
console.log(arr.unique());
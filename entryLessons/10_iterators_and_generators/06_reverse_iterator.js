function reverseIterator(arr) {
    let i = arr.length-1;

    return {
        next: function() {
            if (i >= 0) {
                return { value: arr[i--], done: false };
            } else {
                return { done: true };
            }
        }
    }
}


// arr = [1, 2, 3];
arr = ['a', 'b', 'c'];
let iterator = reverseIterator(arr);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
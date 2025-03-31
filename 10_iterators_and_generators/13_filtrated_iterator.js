function isEven(arr) {
    let output = [];
    for ( let el of arr ) {
        if ( el % 2 === 0 ) {
            output.push(el);
        }
    }
    return output;
}

function filteredIterator(func, arr) {
    let i = 0;
    let result = func(arr);

    return {
        next: function() {
            if (i < result.length) {
                return { value: result[i++], done: false };
            }
            return { done: true }; 
        }
    }
}

let arr = [1,2,3,4,5];

let iter = filteredIterator(isEven, arr);
let nextValue;
while (!(nextValue = iter.next()).done) {
    console.log(nextValue.value);
}
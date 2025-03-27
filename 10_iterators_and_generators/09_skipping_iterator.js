function skippingIter(arr) {
    let i = -2;

    return {
        next: function() {
            i+=2;
            if ( i<arr.length ) {
                return {
                    value: arr[i],
                    done: false
                }
            }
            else {
                return {done: true}
            }    
        },
        [Symbol.iterator]: function() { 
            return this; 
        }
    }
}

// let iter = skippingIter(
//     [1,2,3,4]
// );

// let iter = skippingIter(
//     ['a', 'b', 'c', 'd']
// );

let iter = skippingIter(
    [5,6,7,8,9]
);

for ( let el of iter ) {
    console.log(el);
}
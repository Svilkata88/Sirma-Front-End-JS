function negativePositive(arr) {
    let newArr = [];

    for ( el of arr ) {
        if ( el < 0) {
            newArr.unshift(el);
        } else  if ( el >= 0 ) {
            newArr.push(el);
        }
    }

    console.log(newArr);
}

// negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);
function evenOddSub(arr) {
    let nums = arr.map(el => Number(el));
    let sumEven = 0;
    let sumOdd = 0;

    for ( n of nums) {
        if ( n % 2 === 0 ) {
            sumEven += n;
        }
    }

    for ( n of nums) {
        if ( n % 2 !== 0 ) {
            sumOdd += n;
        }
    }

    console.log(sumEven - sumOdd);
}

// evenOddSub([1, 2, 3, 4, 5, 6]);
evenOddSub([3, 5, 7, 9]);
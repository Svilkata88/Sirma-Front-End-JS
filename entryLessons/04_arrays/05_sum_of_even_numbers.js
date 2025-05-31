function sumOfEven(arr) {
    let nums = arr.map(el => Number(el));
    let sum = 0;

    for ( n of nums) {
        if ( n % 2 === 0 ) {
            sum += n;
        }
    }

    console.log(sum);
}

sumOfEven(['1', '2', '3', '4', '5', '6'])
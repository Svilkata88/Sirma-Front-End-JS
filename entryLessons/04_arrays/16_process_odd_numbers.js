function processedOddNumbers(arr) {
    let nums = [];
    for ( i=0; i<arr.length; i++) {
        if ( i % 2 !== 0 ) {
            nums.push(arr[i]);
        }
    }
    console.log(nums.reverse().map(el => el * 2).join(' '));
}

// processedOddNumbers([10, 15, 20, 25]);
processedOddNumbers([3, 0, 10, 4, 7, 3]);
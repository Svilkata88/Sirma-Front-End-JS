function condenseArray(arr) {
    while ( arr.length > 1) {
        let condensed = [];
        for ( i=0; i<Math.ceil((arr.length-1) / 2); i++ ) {
            condensed.unshift(arr[i] + arr[i+1])
            if (arr.length > 2) {
                condensed.push(arr[arr.length-1]+arr[arr.length-2])
            }
        }
        arr = condensed;
    }
    console.log(arr[0]);
}

condenseArray([2, 10, 3]);
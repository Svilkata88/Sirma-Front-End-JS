function longestIdenticalN(arr) {
    let nums = [];

    for ( i=0; i<arr.length; i++ ) {
        if ( arr[i] === arr[i+1] ) {
            let currNums = [];
            let j = i;

            while (true) {
                currNums.push(arr[j]);
                if ( arr[j] === arr[j+1]) {
                    j++;
                } else {
                    break;
                }
                
            }
            if (currNums.length > nums.length) {
                nums = currNums;
            }
        }
    }
    console.log(nums)
}

// longestIdenticalN([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
// longestIdenticalN([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
longestIdenticalN([4, 4, 4, 4, 1]);
function    nonDeqArr(arr) {
    let topNum;
    let newSeq = [];
    for ( el of arr ) {
        if ( el > topNum || topNum === undefined) {
            newSeq.push(el);
            topNum = el;
        }
    }
    console.log(newSeq);
}

// nonDeqArr([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDeqArr([20, 3, 2, 15, 6, 1]);
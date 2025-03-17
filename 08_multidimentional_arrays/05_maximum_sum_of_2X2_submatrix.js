function maxSum(mtx) {
    for ( let i=0; i<mtx.length; i++) {
        mtx[i] = mtx[i].split(' ').map(Number);
    }

    let maxSum = Number.MIN_SAFE_INTEGER;
    let bestMatrix = [];
    
    for ( let i=0; i<mtx.length-1; i++) {
        for ( let j=0; j<mtx[i].length-1; j++) {
            let currentSum = 
                mtx[i][j] + mtx[i][j + 1] +
                mtx[i + 1][j] + mtx[i + 1][j + 1];

            if (currentSum > maxSum) {
                maxSum = currentSum;
                bestMatrix = [
                    [mtx[i][j], mtx[i][j + 1]],
                    [mtx[i + 1][j], mtx[i + 1][j + 1]]
                ];
            }
        }
    }

    console.log(bestMatrix[0].join(' '));
    console.log(bestMatrix[1].join(' '));
    console.log(`Sum: ${maxSum}`);
}

maxSum(
    [
    '7 1 3 3 2 1',
    '1 3 9 8 5 6',
    '4 6 7 9 1 0',
    ]
);
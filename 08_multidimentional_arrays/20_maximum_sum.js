function maximumSum(matrix) {
    matrix = matrix.map(row => row.split(' ').map(Number))
    let bestSum = 0;
    let best3x3MatrixStartIndex = [];
    for ( let i=0; i<matrix.length; i++ ) {
        if ( i + 2 > matrix.length - 1) {
            break;
        }
        for ( j=0; j<matrix[i].length; j++ ) {
            if ( j + 2 > matrix[i].length - 1) {
                break;
            }
            let sum = matrix[i][j] + 
            matrix[i][j+1] + 
            matrix[i][j + 2] + 
            matrix[i + 1][j] + 
            matrix[i + 1][j+1] + 
            matrix[i + 1][j + 2] + 
            matrix[i + 2][j] + 
            matrix[i + 2][j+1] + 
            matrix[i + 2][j + 2];

            if ( sum > bestSum ) {
                bestSum = sum;
                best3x3MatrixStartIndex = [i, j]
            }
        }
    }

    console.log(`Sum = ${bestSum}`);
    let finalMatrix = [];
    for ( i=best3x3MatrixStartIndex[0]; i<=best3x3MatrixStartIndex[0]+2; i++ ) {
        finalMatrix.push([])
        for ( j=best3x3MatrixStartIndex[1]; j<=best3x3MatrixStartIndex[1]+2; j++ ) {
            finalMatrix[i-best3x3MatrixStartIndex[0]].push(matrix[i][j])
        }
    }
    console.log(finalMatrix.map(row=>row.join(' ')).join('\n'));
}

maximumSum(
    [
        '1 5 5 2 4',
        '2 1 4 14 3',
        '3 7 11 2 8',
        '4 8 12 16 4',
    ]
);

// maximumSum(
//     [
//         '1 0 4 3 1 1',
//         '1 3 1 3 0 4',
//         '6 4 1 2 5 6',
//         '2 2 1 5 4 1',
//         '3 3 3 6 0 5',
//     ]
// );
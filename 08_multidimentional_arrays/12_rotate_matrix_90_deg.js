function rotateMatrix(matrix) {
    let newMatrix = [];

    for ( i=0; i<matrix.length; i++ ) {
        matrix[i] = matrix[i].split(' ').map(Number);
        

        for ( j=0; j<matrix[i].length; j++ ) {
            if (!newMatrix[j]) {
                newMatrix[j]= [];
            }
            newMatrix[j].unshift(matrix[i][j]);
        }
    }

    console.log(newMatrix.map(row => row.join(' ')).join('\n'));
}

// rotateMatrix(
//     ['1 2 3',
//     '4 5 6',
//     '7 8 9',]
// );

rotateMatrix(
    ['0 1 2 3',
    '4 5 6 7',
    '8 9 10 11',
    '12 13 14 15']
);
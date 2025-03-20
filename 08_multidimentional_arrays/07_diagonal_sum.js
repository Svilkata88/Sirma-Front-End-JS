function diagonalSum(matrix) {
    let sum = 0;
    let sum2 = 0;

    for ( let i=0; i<matrix.length; i++ ) {
        matrix[i] = matrix[i].split(' ');
        sum += Number(matrix[i][i]);
    }

    for (let i=matrix.length-1; i>=0; i--) {
        sum2 +=  Number(matrix[i][matrix.length-1-i]);
    }
    console.log(sum+sum2);
}

diagonalSum(
    ['1 2 3',
    '4 5 6',
    '7 8 9',]
);
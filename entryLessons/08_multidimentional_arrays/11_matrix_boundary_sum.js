function boundarySum(matrix) {
    let sum = 0;

    for ( i=0; i<matrix.length; i++ ) {
        matrix[i] = matrix[i].split(' ').map(Number);

        if (i===0 || i===matrix.length-1 ) {
            sum += matrix[i].reduce((acc, el) => acc + el, 0);
        }
        else {
            sum += matrix[i][0];
            sum += matrix[i][matrix[i].length-1];
        }
    }

    console.log(sum);
}

boundarySum(
    ['1 2 3',
    '4 5 6',
    '7 8 9',]
);

boundarySum(
    ['1 2 3 0',
    '4 5 6 7',
    '0 8 9 1',]
);
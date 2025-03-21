function zeroMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let zeroRows = new Set();
    let zeroCols = new Set();

    matrix = matrix.map(row => row.split(' ').map(Number));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }


    zeroRows.forEach(row => {
        matrix[row].fill(0);
    });


    zeroCols.forEach(col => {
        for (let i = 0; i < rows; i++) {
            matrix[i][col] = 0;
        }
    });

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

zeroMatrix(
    ['1 2 3', 
    '1 0 3',
    '4 0 6',
    '7 8 9']
);
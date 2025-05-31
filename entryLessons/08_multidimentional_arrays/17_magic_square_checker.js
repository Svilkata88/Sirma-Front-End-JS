function magicSquare(matrix) {
    let sumd1 = 0; // diagonal 1 \
    let sumd2 = 0; // diagonal 2 /

    let rows = [];
    let cols = [];

    for ( i=0; i<matrix.length; i++ ) {
        let row = matrix[i].split(' ').map(Number);
        let sumRow = row.reduce((acc, el) => acc + el, 0);
        rows.push(sumRow);
        sumd1 += row[i];
        sumd2 += row[row.length-1-i]

        for ( j=0; j<row.length; j++ ) {
            if (!cols[j]) {
                cols[j] = 0;
            }
            cols[j] += row[j];
        }
    }
    
    // Take first row sum as the reference sum
    let magicSum = rows[0];

    // Check if all rows, columns, and diagonals have the same sum
    let allEqual = rows.every(sum => sum === magicSum) &&
                   cols.every(sum => sum === magicSum) &&
                   sumd1 === magicSum &&
                   sumd2 === magicSum;

    // console.log(`Rows: ${rows}`);
    // console.log(`Cols: ${cols}`);
    // console.log(`Diagonal 1 sum is: ${sumd1}`);
    // console.log(`Diagonal 2 sum is: ${sumd2}`);

    console.log(allEqual ? 'True' : 'False');
}


// magicSquare(
//     [
//         '1 2 3',
//         '4 5 6',
//         '7 8 9',
//     ]
// );

// magicSquare(
//     [
//         '1 0 0 0',
//         '0 0 0 1',
//         '0 1 0 0',
//         '0 0 1 0',
//     ]
// );

magicSquare(
    [
        '8 1 6',
        '3 5 7',
        '4 9 2'
    ]
);
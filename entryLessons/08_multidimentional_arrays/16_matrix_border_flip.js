function matrixBorderFlip(matrix) {
    let newM = [];

    for ( i=0; i<matrix.length; i++) {
        matrix[i] = matrix[i].split(' ');

        for ( j=0; j<matrix[i].length; j++) {
            // shifting first row
            if ( i===0 ) { 
                if ( j===matrix[i].length-1 ) {
                    newM.push([matrix[i][j]]);
                }
                else {
                    if (!newM[i]) {
                        newM[i] = [];
                    }
                    newM[i].push(matrix[i][j]);
                }
            }
            // shifting last row
            else if ( i === matrix.length-1 ) {
                if ( j === 0 ) {
                    newM[i-1].push(newM[i-1].shift());
                    newM[i-1].unshift(matrix[i][j]);
                }
                else if ( j === matrix[i].length-1 ) {
                    newM[i].push(matrix[i][j]);
                    newM[i].push(newM[i].shift());
                }
                else {
                    newM[i].push(matrix[i][j]);
                }
            }
            // shifting rows in between
            else {
                if ( j===0 ) {
                    newM[i-1].unshift(matrix[i][j]);
                }
                else if (j===matrix[i].length-1) {
                    newM.push([matrix[i][j]]);
                }
                else {
                    newM[i][j] = matrix[i][j];
                }
            }
        }
    }

    console.log(newM.map(row => row.join(' ')).join('\n'));
}

matrixBorderFlip(
    [
        '1 2 3 4',
        '5 6 7 8',
        '9 10 11 12',
    ]
);
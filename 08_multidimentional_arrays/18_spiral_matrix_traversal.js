function spiralMatrinx(matrix) {
    let newM = [];
    matrix = matrix.map( row => row.split(' ').map(Number));


    while ( matrix.length > 0 ) {
        for ( let i=0; i<matrix.length; i++ ) {
            if ( i===0 ) {
                while (matrix[i].length) {
                    newM.push(matrix[i].shift());
                }
            }
            else if ( i===matrix.length-1 ) {
                matrix[i].reverse();
                while (matrix[i].length)  {
                    newM.push(matrix[i].shift());
                }
            }
            else {
                newM.push(matrix[i].pop());
            }
        }
        // check if 1st row matrix is empty 
        if ( matrix[0].length === 0 ) {
            matrix.shift()
        }
        // check if last row matrix is empty 
        if ( matrix[matrix.length-1].length === 0 ) {
            matrix.pop()
        }
    
        for ( let i=matrix.length-1; i>=0; i-- ) {
            newM.push(matrix[i].shift())
        }
    }

    console.log(newM.join(','));
    // console.log(matrix);
}

spiralMatrinx(
    [
        '1 2 3 4',
        '5 6 7 8',
        '9 10 11 12',
        '13 14 15 16',
    ]
);
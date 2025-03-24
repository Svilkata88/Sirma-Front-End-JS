function checkerboardPattern(n) {
    let matrix = [];
    for ( let i=0; i<n; i++ ) {
        matrix.push([]);
        for ( let j=0; j<n; j++ ) {
            if ( i % 2 === 0) {
                if ( j % 2 === 0 ) {
                    matrix[i].push(0);
                }
                else {
                    matrix[i].push(1);
                }
            }
            else {
                if ( j % 2 === 0 ) {
                    matrix[i].push(1);
                }
                else {
                    matrix[i].push(0);
                }
            }
        } 
    }

    console.log(
        matrix
        .map(row => row.join(' '))
        .join('\n')
    );
}


// checkerboardPattern(3);
checkerboardPattern(4);
function matrixAddition(mtx1, mtx2) {
    for ( let i=0; i<mtx1.length; i++) {
        for ( let j=0; j<mtx1[i].length; j++) {
            mtx1[i][j] += mtx2[i][j]
        }
    }

    for ( let row of mtx1 ) {
        console.log( row.join(' ') );
    }
}


// matrixAddition(
//     [[1,2],[3,4]],
//     [[2,2],[2,2]]
// );

matrixAddition(
    [[1,2,3],[4,3,1]],
    [[1,2,3],[4,2,2]]
);
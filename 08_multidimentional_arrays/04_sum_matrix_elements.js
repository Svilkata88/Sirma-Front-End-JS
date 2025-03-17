function matrixInfo(mtx) {
    let sum = 0;

    for ( let i=0; i<mtx.length; i++) {
        for ( let j=0; j<mtx[i].length; j++) {
            sum += mtx[i][j];
        }
    }

    console.log(mtx.length);
    console.log(mtx[0].length);
    console.log(sum);
}

// matrixInfo(
//     [[7, 1, 3, 3, 2, 1],
//     [1, 3, 9, 8, 5, 6],
//     [4, 6, 7, 9, 1, 0]]
// );

matrixInfo(
    [[10, 11, 12, 13],
    [14, 15, 16, 17]]
)
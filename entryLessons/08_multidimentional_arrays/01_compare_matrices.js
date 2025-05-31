function compareMtx(mtx1, mtx2) {
    let flag = true;
    for ( let i=0; i<mtx1.length; i++) {
        for ( let j=0; j<mtx1[i].length; j++) {
            if ( mtx1[i][j] != mtx2[i][j] ) {
                flag = false;
                break;
            } 
        }
    }
    if (flag) {
        console.log('equal');
    }
    else {
        console.log('not equal');
    }
}

// compareMtx(
//     [[1,2,3],
//     [2,1,3]],
    
//     [[1,2,3],
//     [2,1,3]]
// )

compareMtx(
    [[1,2,3],
    [4,5,6]],
    [[1,3],
    [4,5]]
)
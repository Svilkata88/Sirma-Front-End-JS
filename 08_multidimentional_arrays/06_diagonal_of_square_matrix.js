function diagonal(mtx) {

    for (let i = 0; i < mtx.length; i++) {
        mtx[i] = mtx[i].split(' ').map(Number);
    }

    console.log("Primary diagonal:");
    for (let i = 0; i < mtx.length; i++) {
        console.log(mtx[i][i]); 
    }

    console.log("Secondary diagonal:");
    for (let i = mtx.length-1; i>=0; i--) {
        console.log(mtx[i][mtx.length - 1 - i]); 
    }
}


diagonal(
    ['1 2 3',
    '1 2 3',
    '1 2 3',]
);
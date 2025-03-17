function intersection(mtx1, mtx2) {
    let mtx3 = mtx1;

    for ( let i=0; i<mtx1.length; i++) {
        mtx1[i] = mtx1[i].split(' ');
        mtx2[i] = mtx2[i].split(' ');
        
        for ( let j=0; j<mtx1[i].length; j++) {
            if ( mtx1[i][j] === mtx2[i][j] ) {
                mtx3[i][j] = mtx1[i][j];
            }
            else {
                mtx3[i][j] = `*`;
            }
        }
    }
    
    for ( let row of mtx3 ) {
        console.log( row.join(' ') );
    }
}

// intersection(
//         ['a b c d',
//         'a b c d',
//         'a b c d'],
//         ['k b c k',
//         'a b g d',
//         'a k c d']
// );

intersection(
    ['1 2',
    '3 4',
    '5 6',
    '7 8',
    '9 1',],

    ['0 2',
    '3 1',
    '1 6',
    '7 4',
    '1 1',]
);
function fillMatrix(size, pattern) {
    mtx = [];
    switch (pattern) {
        case 'A':
            for ( i=0; i<size; i++ ) {
        

                for ( j=0; j<size; j++ ) {
                    if(!mtx[i]) {
                        mtx.push([]);
                    }
                    mtx[i].push(j*3+i+1)
                }
            
                console.log(mtx[i].join(' '));
            }
            break;

        case 'B':
            for ( i=0; i<size; i++ ) {
        

                for ( j=0; j<size; j++ ) {
                    if(!mtx[i]) {
                        mtx.push([]);
                    }
                    if (j%2===0) {
                        mtx[i].push(j*3+i+1)
                    }
                    else {
                        mtx[i].push((size*2)-i)
                    }
                }
            
                console.log(mtx[i].join(' '));
            }
            break;
            
    }


}

fillMatrix(3, 'A');
function queenPositions(position, matrix) {
    let qHitPositions = {
        'x':[],
        'y':[],
        'd1':[], // d1=\
        'd2':[], // d2=/
    };
    let [x, y] = position.split(', ').map(Number);
    let row = matrix[x].split(' ');

    // storing horizontal positions of positions where queen can walk through
    for (let [i, _] of row.entries()) {
        qHitPositions['x'].push([x, i]);
    }

    // storing vertical positions of positions where queen can walk through
    for ( let i=0; i<matrix.length; i++) {
        if (qHitPositions['y'].some(pos => pos[0] === i && pos[1] === y)) {
            continue;
        }
        else {
            qHitPositions['y'].push([i, y]);
        }
    }

    // storing up-right diagonal positions of positions where queen can walk through
    let col = y + 1;
    for ( let i=x-1; i>=0; i--) {
        if ( i < 0 || col > row.length -1 ) {
            break;
        }
        if (qHitPositions['d2'].some(pos => pos[0] === i && pos[1] === col)) {
            continue;
        }
    
        qHitPositions['d2'].push([i, col]);
        col += 1; // Move column to the right
    }

    // storing down-left diagonal positions of positions where queen can walk through
    col = y - 1;
    for ( let i=x+1; i<matrix.length; i++) {
        if ( col < 0 ) {
            break;
        }
        if (qHitPositions['d2'].some(pos => pos[0] === i && pos[1] === col)) {
            continue;
        }
    
        qHitPositions['d2'].push([i, col]);
        col -= 1; // Move column to the left
    }

    // storing up-left diagonal positions of positions where queen can walk through
    col = y - 1; 
    for (let i = x - 1; i >= 0; i--) { 
        if (col < 0) { 
            break;
        }

        if (qHitPositions['d1'].some(pos => pos[0] === i && pos[1] === col)) {
            continue;
        }

        qHitPositions['d1'].push([i, col]);
        col -= 1; // Move column to the left
    }
    
    // Storing down-right diagonal positions where the queen can move
    col = y + 1;
    for (let i = x + 1; i < matrix.length; i++) { // Move downwards
        if (col > row.length - 1) { 
            break;
        }

        if (qHitPositions['d1'].some(pos => pos[0] === i && pos[1] === col)) {
            continue;
        }

        qHitPositions['d1'].push([i, col]);
        col += 1; // Move column to the right
    } 

    return qHitPositions;
}

function chessboardChecker(matrix) {
    let qPositions = {};
    
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i].split(' ');
        
        for (let j = 0; j < row.length; j++) {
            if (row[j] === '1') {
                qPositions[`${i}, ${j}`] = undefined;
            }
        }
    }
    
    for (let pos in qPositions) {
        qPositions[pos] = queenPositions(pos, matrix);
    }
    
    let positionSets = {}; 
    
    // Convert each qHitPositions category into sets for easy lookup
    for (let key in qPositions) {
        positionSets[key] = {
            'x': new Set(qPositions[key]['x'].map(pos => pos.join(','))),
            'y': new Set(qPositions[key]['y'].map(pos => pos.join(','))),
            'd1': new Set(qPositions[key]['d1'].map(pos => pos.join(','))),
            'd2': new Set(qPositions[key]['d2'].map(pos => pos.join(',')))
        };
    }
    
    // Compare each queen's positions with the others
    let flag = false;
    outerLoop: // Label for the outermost loop
    for (let key1 in positionSets) {
        for (let key2 in positionSets) {
            if (key1 === key2) continue; 
            
            for (let dir of ['x', 'y', 'd1', 'd2']) {
                for (let pos of positionSets[key1][dir]) {
                    if (positionSets[key2][dir].has(pos)) {
                        flag = true;
                        break outerLoop; 
                    }
                }
            }
        }
    }
    if (flag) {
        console.log('Yes')
    } 
    else {
        console.log('No');
    }
}

// // option 1
// chessboardChecker(
//     [
//     '0 1 0 0',
//     '0 0 0 1',
//     '1 0 0 0',
//     '0 0 1 0'
//     ]
// );

// // option 2
// chessboardChecker(
//     [
//         '0 1 0 0',
//         '0 0 0 1',
//         '1 0 0 0',
//         '0 1 0 0',
//     ]
// )

// // option 3
chessboardChecker(
    [
        '0 1 0 0',
        '0 0 0 0',
        '1 0 0 0',
        '0 0 0 0',
    ]
)




// queenPositions func checker!
// queenPositions(
//     '1, 2', 

//     [
//     '0 1 0 0',
//     '0 0 0 1',
//     '1 0 0 0',
//     '0 0 1 0'
//     ]
// )
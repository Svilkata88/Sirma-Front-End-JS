function excelToNumber(column) {
    let cols = column.split('');
    
    let sum = cols.reduce((sum, el) => {
        return sum * 26 + (el.charCodeAt(0) - 64);
    }, 0);
    
    return sum;
}

function excelSum(matrix, range) {
    let [ start, end ] = range.split(':');

    let startRow = Number(start.split('')[1]-1);
    let endRow = Number(end.split('')[1]-1);
    let startCol = Number(excelToNumber(start.split('')[0])-1);
    let endCol = Number(excelToNumber(end.split('')[0])-1);

    let sum = 0;
    for ( i=startRow; i<=endRow; i++ ) {
        for ( let j=startCol; j<=endCol; j++ ) {
            sum += matrix[i][j];
        }
    }
    console.log(sum);
}


// excelSum(
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ],
//     'A1:C2'
// )

// excelSum(
//     [
//         [0, 1, 0, 0],
//         [0, 0, 0, 1],
//         [1, 0, 0, 0],
//         [0, 1, 0, 0]
//     ],
//     'A1:B4'
// )

excelSum(
    [
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    'A1:C4'
)
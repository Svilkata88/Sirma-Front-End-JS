function rowColSum(matrix) {
    let sumRow = [];
    let sumCol = [];

    for (let i=0; i<matrix.length; i++) {
        let row = matrix[i].split(' ').map(el=>Number(el));
        let currentSum = row.reduce((acc, el) => acc + el, 0);
        sumRow.push(currentSum);

        for (j=0; j<row.length; j++) {
            if(!sumCol[j]) {
                sumCol[j] = 0;
            }
            sumCol[j] += row[j]
        }
    }

    console.log(`Row Sums: ${sumRow.join(', ')}`)
    console.log(`Column Sums: ${sumCol.join(', ')}`)
}

rowColSum(
    ['1 2',
    '3 4',
    '5 6',])

rowColSum(
    ['1 2 3',
    '4 5 6',
    '7 8 9',]
)
function rectanglePattern(n, m) {
    let matrix = [];
    for (let i=0; i<n; i++) {
        let a; 
        if (i === 0 || i === n - 1) {
            a = '*'.repeat(m)
            matrix.push(a)
        }
        else {
            a = '*' + ' '.repeat(m-2) + '*';
            matrix.push(a)
        }
    }
    console.log(matrix.join('\n'));
}

rectanglePattern(3, 4);

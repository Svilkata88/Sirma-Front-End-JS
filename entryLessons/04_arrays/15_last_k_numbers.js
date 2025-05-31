function    lastKNumbers(n, k) {
    let newNums = [1,];

    for ( i=1; i<n; i++) {
        let sum = newNums.slice(Math.max(0, newNums.length - k)).reduce((acc, num) => acc + num, 0);
        newNums.push(sum);
    }

    console.log(newNums);
}

// lastKNumbers(6, 3);
lastKNumbers(8, 2);
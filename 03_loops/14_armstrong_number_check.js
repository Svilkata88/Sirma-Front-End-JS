function armstrongCheck(n) {
    let sum = 0;
    let digits = n.toString().split('').map(el => Number(el));
    
    sum = digits.reduce((acc, el) => acc + el ** digits.length, 0);

    if (sum === n) {
        console.log('Armstrong');
    } else {
        console.log('Not Armstrong');
    }
}

armstrongCheck(153);
armstrongCheck(370);
armstrongCheck(123);
armstrongCheck(407);
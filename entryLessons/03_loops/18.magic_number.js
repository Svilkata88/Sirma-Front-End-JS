function magicNumber(num1, num2, magicNumber) {
    let combination = 0;
    let flag = false;
    for ( let i=num1; i<=num2; i++) {
        if (flag) {
            break;
        }

        for ( let j=num1; j<=num2; j++) {
            if (flag) {
                break;
            }

            combination ++;
            if (i + j === magicNumber) {
                console.log(`Combination ${combination} - ${i} + ${j} = ${magicNumber}`);
                flag = true;
            }
        }
    }
    if (!flag) {
        console.log(`${combination} combinations - neither equals ${magicNumber}`)
    }
    
}

// magicNumber(1, 10, 5);
// magicNumber(23, 24, 20);
magicNumber(1, 2, 3);
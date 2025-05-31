function evenNumbers(n) {
    let i = 1;
    let flag = true
    let count = 0;
    let sum = 0;

    while (flag) {  

        if (i % 2 === 0) {
            sum += i
            count++;
        };
        
        if (count===n) {
            flag = false;
        };
        
        i++;
    }

    console.log(sum);
}

evenNumbers(5);
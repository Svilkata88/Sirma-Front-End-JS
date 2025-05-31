function fibunaciSum(n) {
    let sum = 0;
    let num1 = 0;
    let num2 = 1;
 
    for (let i = 0; i <= n; i++) {
        sum += num1; 
        let next = num1 + num2; 
        num1 = num2;
        num2 = next;
    }
    console.log(sum)
}

fibunaciSum(5);
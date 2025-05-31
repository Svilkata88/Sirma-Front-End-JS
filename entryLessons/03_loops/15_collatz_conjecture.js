function collatz(n) {
    let numbers = [n];
    while (n!==1) {
        if (n % 2 === 0) {
            n /= 2; 
            numbers.push(n);
        } else {
            n = n * 3 + 1
            numbers.push(n);
        }
    }

    console.log(numbers.join(' '));
}

collatz(6);
collatz(12);
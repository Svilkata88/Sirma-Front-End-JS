function isPrime(n) {
    if ( n < 2 ) {
        return false;
    }
    
    for ( i=2; i<=Math.sqrt(n); i++ ) {
        if ( n % i === 0 ) {
            return false;
        }
    }

    return true;
}

function* primeNumbersGen() {
    let n = 1;
    
    while (true) {
        if ( isPrime(n) ) {
            yield n;
        }
        n++;
    }
}

let gen = primeNumbersGen();
// console.log(isPrime(6));
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

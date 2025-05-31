function* fibonacci() {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
    
}

let fib = fibonacci();

console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
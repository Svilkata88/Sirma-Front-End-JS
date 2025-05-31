function fibonacci() {
    let n = 0;
    let newN = 1;

    function getFibonacci() {
        const current = n;
        n = newN;
        newN = current + newN;
        
        return current;
    }

    return getFibonacci;
}


const f = fibonacci();
for (let i=0; i<=10; i++) {
    console.log(f());
}
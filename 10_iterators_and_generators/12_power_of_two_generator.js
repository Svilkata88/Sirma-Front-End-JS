function isPowerOfTwo(n) {
    return n > 0 && Math.log2(n) % 1 === 0;
}

function* powerOfTwo() {
    let n = 1;
    while ( true ) {
        if ( isPowerOfTwo(n) ) {
            yield n;
        }
        n++;
    }
};

const gen = powerOfTwo();

for ( let i=0; i<=10; i++ ){
    console.log(gen.next().value);
}

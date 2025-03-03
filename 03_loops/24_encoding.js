function encoding(n) {
    for (let i=1, j=n.toString().length-1; i<=n.toString().length; i++, j--) {
        let digit = Number((n.toString()[j]));
        let symbol = String.fromCharCode(33 + digit);
        if ( digit === 0 ) {
            console.log('ZERO')
        }
        else {
            console.log(symbol.repeat(digit))
        } 
        
    }
}
encoding(2049);
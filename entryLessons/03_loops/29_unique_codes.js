function uniqueCodes(first, second, thurd) {
    for ( i=2; i<=first; i+=2) {
        for ( j=2; j<=second; j++) {
            for ( k=2; k<=thurd; k+=2) {
                if ([2, 3, 5, 7].includes(j)) {
                    console.log(`${i}${j}${k}`)
                }
                
            }
        }
    }
}

// uniqueCodes(3, 5, 5);
uniqueCodes(6, 2, 6);
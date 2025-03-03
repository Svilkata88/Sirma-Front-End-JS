function numbersToThousandEndInN(n) {
    for (i=0; i<=1000; i++) {
        if (i.toString().endsWith(`${n}`)) {
            console.log(i);
        }
        
    }
}

numbersToThousandEndInN(8);
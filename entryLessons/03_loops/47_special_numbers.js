function specialNumbers(n) {
    let specialNumbers = [];
    for (i=1111; i<=9999; i++) {
        let num = i.toString().split('').map(element => Number(element));

        let flag = true;
        for ( number of num) { 
            if (n % number !== 0 ) {
                flag = false;
                break; 
            } 
        }
        if ( flag ) {
            specialNumbers.push(num.join(''));
        }
    }
    
    console.log(specialNumbers.join('\n'));
}

specialNumbers(3);
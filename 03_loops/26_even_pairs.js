function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; 
    }

    return true; 
}


function evenPairs(startValOne, StartValTwo, diffOne, diffTwo) {
    let firstPair = startValOne + diffOne;
    let SecondPair = StartValTwo + diffTwo;

    let startNumber = `${startValOne}${StartValTwo}`;
    let endNumber = `${firstPair}${SecondPair}`;

    for (let i = Number(startNumber); i<=Number(endNumber); i++) {
        let firstPartOfI = i.toString().slice(0, 2);
        let secondPartOfI = i.toString().slice(2, 4);

        if ( isPrime(Number(firstPartOfI)) && isPrime(Number(secondPartOfI))) {
            console.log(`${firstPartOfI}${secondPartOfI}`);
        }
    }
}

// evenPairs(10, 20, 5, 5);
evenPairs(10, 30, 9, 6);
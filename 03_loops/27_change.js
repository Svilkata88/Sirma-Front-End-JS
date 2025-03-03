function getChange(amount) {
    let coins = [200, 100, 50, 20, 10, 5, 2, 1]; 
    let change = Math.round(amount * 100); 
    let count = 0;

    for (let coin of coins) {
        while (change >= coin) {
            change -= coin;
            count++;
        }
    }
    
    console.log(count)
}

getChange(5.5)
getChange(2)
getChange(0.56)
getChange(2.73)
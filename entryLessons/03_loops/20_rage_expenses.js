function rageExpenses(gamesLost, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
    let headsetsCrashed = 0;
    let mouseCrashed = 0;
    let keyboardCrashed = 0;
    let displayCrashed = 0;

    for (let i=1; i<=gamesLost; i++) {
        if ( i % 2 === 0 ) {
            headsetsCrashed ++;
        } 
        
        if ( i % 3 === 0 ) {
            mouseCrashed ++;
            if ( i % 2 === 0 ) {
                keyboardCrashed ++;
                
                if ( keyboardCrashed % 2 === 0 && keyboardCrashed > 0 ) {
                    displayCrashed ++;
                }
            };
        }
    }

    let total = headsetsCrashed * headsetPrice + 
    mouseCrashed * mousePrice +
    keyboardCrashed * keyboardPrice +
    displayCrashed * displayPrice;

    console.log(headsetsCrashed)
    console.log(mouseCrashed)
    console.log(keyboardCrashed)
    console.log(displayCrashed)
    console.log(`Rage expenses ${total} lv.`)
}

// rageExpenses(7, 2, 3, 4, 5);
rageExpenses(23, 12.5, 21.5, 40, 200);

11 * 12.5 + 7 * 21.5 + 3 * 40 + 6 * 200
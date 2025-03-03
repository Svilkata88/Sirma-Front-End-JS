function Money(oneLevCoins, twoLevCoins, fiveLevMoney, Sum) {
    for (i=0; i<=oneLevCoins; i++) {
        for (j=0; j<=twoLevCoins; j++) {
            for (k=0; k<=fiveLevMoney; k++) {
                if (i * 1 + j * 2 + k * 5 === Sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${Sum} lv.`)
                }
            }
        }
    }
}

Money(3, 2, 3, 10);
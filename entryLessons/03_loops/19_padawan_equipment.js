function padawan(money, students, pLightsbers, pRobes, pBelts) {
    let freeBelts = Math.floor(students / 6);
    let moneyNeeded = Math.ceil((students*1.1)) * pLightsbers + students*pRobes + (students-freeBelts) * pBelts;

    if (money >= moneyNeeded) {
        console.log(`The money is enough - it would cost ${moneyNeeded.toFixed(2)}lv.`);
    } else {
        console.log(`George Lucas will need ${(moneyNeeded - money).toFixed(2)}lv more.`);
    }
}

padawan(100, 2, 1.0, 2.0, 3.0);
padawan(100, 42, 12.0, 4.0, 3.0);
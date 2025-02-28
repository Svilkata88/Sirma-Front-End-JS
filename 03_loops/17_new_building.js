function newBuilding(floor, rooms) {
    for (let i=floor; i>0; i--) {
        let roomList = [];
        for (j=0; j<rooms; j++) {
            if (i===floor) {
                roomList.push(`L${i}${j}`)
            } else {
                if (i % 2 === 0) {
                    roomList.push(`O${i}${j}`)
                }
                else {
                    roomList.push(`A${i}${j}`)
                }
            }
        }
        console.log(roomList.join(' '));
    }
}

// newBuilding(6, 4);
// newBuilding(3, 3);
newBuilding(4, 4);
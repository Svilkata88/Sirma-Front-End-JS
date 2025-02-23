function minToHour(min) {
    let hour = Math.floor(min / 60);
    min = min - hour * 60
    console.log(`${hour} : ${min}`)

}

minToHour(325);
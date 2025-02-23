function minToHourFormated(min) {
    let hour = Math.floor(min / 60);
    min = min - hour * 60;
    console.log(`${hour.toString(10).padStart(2, '0')} : ${min}`);

}

minToHourFormated(90);
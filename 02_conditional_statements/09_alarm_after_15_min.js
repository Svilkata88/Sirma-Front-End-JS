function timeCalc(hour, min) {
    if ( min + 15 >= 60 ) {
        hour ++;
        min = min - 45;
    } else {
        min = min + 15;
    }
    console.log(`${hour}:${min.toString(10).padStart(2, '0')}`)
}

timeCalc(14, 46);
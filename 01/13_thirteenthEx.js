function speed(distance, hours, mins, secs) {
    let Т = (((hours * 60) + mins) * 60) + secs
    let V = distance / Т

    console.log(V.toFixed(6))
}

speed(600, 7, 35, 55)



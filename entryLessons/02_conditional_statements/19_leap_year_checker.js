function isLeapYear(year) {
    if (year % 4 !==0) {
        console.log("It's not a leap year!")
    } else {
        if (year % 100 === 0) {
            if (year % 400 === 0)
                console.log("It's a leap year!")
            else {
                console.log("It's not a leap year!")
            }
        } else {
            console.log("It's a leap year!")
        }
    }
}

isLeapYear(2020);
isLeapYear(1900);
isLeapYear(2000);
isLeapYear(2023);
isLeapYear(1600);
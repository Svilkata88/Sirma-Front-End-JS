function ticketPrice(age) {
    let price;
    if (age<=12) {
        price = 5;
    } else if (age <= 19) {
        price = 8;
    } else {
        price = 10;
    }
    console.log(`$${price}`)
}

ticketPrice(10);
ticketPrice(16);
ticketPrice(25);
ticketPrice(13);    
function vacationCalculator(days, room_type, assessment) {
    let discount;
    let priices = {
        'single_room' : 25.00,
        'apartment' : 50.00,
        'presidential' : 100.00
    };


    if (room_type === 'single_room') {
        if (days < 10) {
            discount = 1;
        } else if (days <= 15) {
            discount = 1;
        } else {
            discount = 1;
        }
    } else if (room_type === 'apartment') {
        if (days < 10) {
            discount = 0.7;
        } else if (days <= 15) {
            discount = 0.65;
        } else {
            discount = 0.5;
        }
    } else if (room_type === 'presidential') {
        if (days < 10) {
            discount = 0.9;
        } else if (days <= 15) {
            discount = 0.85;
        } else {
            discount = 0.8;
        }
    };

    let total_price = ( days - 1 ) * priices[room_type] * discount;

    if (assessment === 'positive') {
        total_price = total_price * 1.25;
    } else if (assessment === 'negative') {
        total_price = total_price * 0.9;
    };

    console.log(total_price.toFixed(2));
}

vacationCalculator(11, 'apartment', 'positive');
vacationCalculator(30, 'presidential', 'negative');
vacationCalculator(12, 'single_room', 'positive');
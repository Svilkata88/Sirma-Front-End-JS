function speed(num) {
    if ( num <= 10 ) {
        console.log('slow');
    } else if ( num <= 60 ) {
        console.log('average');
    } else if ( num <= 120 ) {
        console.log('fast');
    } else if ( num <= 160 ) {
        console.log('super-fast');
    } else if ( num > 160 ) {
        console.log('turbo-fast')
    }
}

speed(60.001);
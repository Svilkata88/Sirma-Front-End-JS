function addresses(age, gender) {
    if ( gender === 'm' ) {
        if ( age < 16 ) {
            console.log('Master')
        } else {
            console.log('Mr.')
        }
    } else if ( gender === 'f' ) {
        if ( age < 16 ) {
            console.log('Miss')
        } else {
            console.log('Ms.')
        }
    }
}

addresses(15, 'f')
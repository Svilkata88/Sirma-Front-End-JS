function discount(age, isMember) {
    if (age < 18) {
        console.log('10% discount')
    } else if ( age <= 64 ) {
        switch(isMember) {
            case 'Yes':
                console.log('20% discount');
                break
            case 'No':
                console.log('10% discount');
                break
        }
    } else {
        console.log('30% discount');
    }
}

discount(20, 'Yes');
discount(15, 'No');
discount(70, 'No');
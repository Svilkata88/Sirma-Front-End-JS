function survival(time_of_day, environment, items) {
    if (time_of_day === 'day') {
        if (environment === 'forest') {
            if (items === 'knife') {
                console.log('Hunt for food');
            } else if (items === 'container') {
                console.log('Collect berries');
            } else {
                console.log('Explore');
            }
        } else if ( environment === 'desert') {
            if (items === 'hat') {
                console.log('Search for water');
            } else {
                console.log('Find shade');
            }
        }
    } else if (time_of_day === 'night') {
        if (environment === 'forest') {
            if (items === 'firestarter') {
                console.log('Make campfire');
            } else {
                console.log('Climb a three for safety');
            }
        } else if ( environment === 'desert') {
            if (items === 'blanker') {
                console.log('Sleep');
            } else {
                console.log('Keep moving to stay warm');
            }
        }
    }
}


survival('day', 'forest', 'knife');
survival('day', 'forest', 'container');
survival('night', 'forest', 'firestarter');
survival('day', 'forest', 'bag');
survival('night', 'desert', 'blanker');
survival('day', 'desert', 'hat');
survival('night', 'desert', 'sword');
survival('night', 'forest', 'hat');
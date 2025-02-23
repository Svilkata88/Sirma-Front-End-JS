function path(left_hand, right_hand) {
    if (left_hand === 'sword') {
        if ( right_hand === 'shield') {
            console.log('Path to the castle');
        } else {
            console.log('Path to the forest');
        }
    } else if ( left_hand === 'map') {
        if (right_hand === 'coins') {
            console.log('Go to the town');
        } else {
            console.log('Camp');
        }
    } else {
        console.log('Wander aimlessly');
    }
}

path('sword', 'shield');
path('map', 'coins');
path('torch', 'flower');
path('sword', 'pouch');
path('map', 'compass');
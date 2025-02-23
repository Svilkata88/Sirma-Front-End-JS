function potion(ingr1, ingr2) {
    if (ingr1 === 'herbs') {
        if (ingr2 === 'water') {
            console.log('Health portion');
        } else if (ingr2 === 'oil') {
            console.log('Stealth portion');
        } else {
            console.log('Minor stamina potion');
        }
    }  else if (ingr1 === 'berries') {
        if (ingr2 === 'sugar') {
            console.log('Speed portion');
        } else {
            console.log('Minor energy potion');
        }
    } else {
        console.log('No potion');
    }
}

potion('herbs', 'water');
potion('herbs', 'oil');
potion('herbs', 'banana');
potion('berries', 'sugar');
potion('berries', 'banana');
potion('herbs', 'sugar');
potion('sugar', 'salt');
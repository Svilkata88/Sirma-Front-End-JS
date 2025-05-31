function validIndex(index) {
    const num = Number(index);
    if (isNaN(num) || num < 0) {
        return false;
    }
    return true;
}

function aurorBattleFormation(numbers, commands) {
    // iteratin over the commands
    while ( commands.length > 0 ) {
        const command = commands.shift();
        const [commandInstruction, ...indexes] = command.split(' ');
        switch(commandInstruction) {
            case 'destroy':
                if ( !validIndex(indexes[0]) ) {continue;}
                numbers.splice(indexes[0], 1);
                break;
            case 'swap':
                let i = indexes[0];
                let j = indexes[1];
                if (!numbers[i] || !numbers[j] || i===j ) {continue;} // skipping the iteration if indexes are out of range
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
                break;
            case 'add':
                if ( !validIndex(indexes[0]) ) {continue;}
                numbers.push(Number(indexes[0]))
                break;
            case 'insert':
                if ( indexes.length < 2 ) {continue;} // index or Id is missing
                let id = indexes[0];
                let index = indexes[1];
                if ( !validIndex(id) || !validIndex(index) ) {continue;}
                numbers.splice(index, 0, id);
                break;
            case 'center':
                if ( numbers.length <= 2 ) {
                    continue;
                }
                let pivot = numbers.length / 2; // whole numbrr of float
                if ( pivot % 1 === 0 ) { // case whole number meaning list is even
                    while (numbers.length > 2) {
                        numbers.shift(); 
                        numbers.pop();   
                    }
                }
                else {  // case float meaning list is odd 
                    pivot = Math.floor(pivot);
                    let center = numbers[pivot];
                    console.log(center);
                    continue;
                }
                break;
        }
        console.log(numbers.join(' '));
    }
}


// aurorBattleFormation(
//     [1, 2, 3, 4, 5],
//     [
//         'destroy 3',
//         'swap 0 1',
//         'add 6',
//         'center',
//     ]
// );

// aurorBattleFormation(
//     [1, 2, 3, 4, 5],
// [
//     'add 6',
//     'swap 0 5',
//     'swap 1 4',
//     'swap 2 3',
//     'swap 2 100',
//     'swap 2 2',
//     'center',
// ]
// );

// aurorBattleFormation(
//     [1, 2],
// [
//     'insert 3 2',
//     'center',
//     'destroy 1',
//     'destroy 2',
//     'center', 
// ]
// );

aurorBattleFormation(
    [1, 2],
    ['insert 8 -1']
);

aurorBattleFormation(
    [1, 2],
    ['insert 8 a']
);

aurorBattleFormation(
    [1, 2],
    ['insert a 2']
);

aurorBattleFormation(
    [1, 2],
    ['add a']
);

aurorBattleFormation(
    [1, 2],
    ['swap a a']
);

aurorBattleFormation(
    [1, 2],
    ['swap 0 3']
);


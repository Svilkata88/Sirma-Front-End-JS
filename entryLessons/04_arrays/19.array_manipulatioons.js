function arrayManipulations(arrInput) {
    let arr = arrInput.shift().split(' ');

    for ( let command of arrInput) {
        let [c, num, num2] = command.split(' ');
        switch(c) {
            case 'Add':
                arr.push(num);
                break;
            case 'Remove':
                arr = arr.filter(el => el !== num);
                break;
            case 'RemoveAt':
                arr.splice(num, 1);
                break;
            case 'Insert':
                arr.splice(num2, 0, num);
                break;
        }
        
    }
    console.log(arr);
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);

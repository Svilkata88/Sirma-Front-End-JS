function addRemove(commandsArray) {
    let startNum = 1;
    let arr = [];

    for ( command of commandsArray) {
        if ( command === 'add') {
            arr.push(startNum);
            startNum ++ ;
        } else if ( command === 'remove') {
            arr.pop();
            startNum ++; 
        }
    }

    console.log(arr);
}

// addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
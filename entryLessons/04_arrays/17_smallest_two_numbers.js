function smallestTwo(arr) {
    let smallest = [];
    for ( i=0; i<arr.length; i++ ) {
        if( smallest.length < 2 ) {
            smallest.push(arr[i]);
        } else if ( arr[i] < smallest[0] ) {
            smallest[0] = arr[i];
        } else if ( arr[i] < smallest[1] ) {
            smallest[1] = arr[i];
        }
    }
    console.log(smallest);
}

// smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);
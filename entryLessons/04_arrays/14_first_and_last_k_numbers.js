function firstAndLast(n, arr) {
    let first_n = [];
    let last_n = [];
    for (i=0; i<n; i++) {
        first_n.push(arr[i]);
    }

    for (i=arr.length-1; i>arr.length-1-n; i--) {
        last_n.unshift(arr[i]);
    }

    console.log(first_n.join(' '));
    console.log(last_n.join(' '));
}

// firstAndLast(2, [7, 8, 9]);
firstAndLast(3, [6, 7, 8, 9]);
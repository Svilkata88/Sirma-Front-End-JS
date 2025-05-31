function printNElement(arr, step) {
    for (i=0; i<=arr.length-1; i+=step) {
        console.log(arr[i])
    }
}

printNElement(['5', '15', '31', '14', '20'], 2);
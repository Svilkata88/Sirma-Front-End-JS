function listOfProducts(arr) {
    let sortedArr = arr.sort();

    for ( i=0; i<arr.length; i++ ) {
        console.log(`${i+1}.${arr[i]}`)
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
function reverseArrayStr(arr) {
    for ( i=0, j=arr.length-1; i<Math.floor(arr.length-1) / 2; i++, j--) {

        let el1 = arr[i];
        let el2 = arr[j];
        arr[i] = el2;
        arr[j] = el1;

    }
    console.log(arr);
}

reverseArrayStr(['a', 'b', 'c', 'd', 'e']);
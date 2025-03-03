function equalArrays(arr1, arr2) {
    let flag = true;
    let breakIndex = 0;
    for ( i=0; i<arr1.length-1; i++) {
        if ( arr1[i] !== arr2[i] ) {
            flag = false;
            breakIndex = i;
            break;
        }
    }

    if (flag) {
        let sum = arr1.reduce((acc, el) => acc + el, 0);
        console.log(`Arrays are identical. Sum: ${sym}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${breakIndex} index.`)
    }
}

// equalArrays([1, 2, 3], [1, 2, 3]);
equalArrays([1, 2, 3, 4, 5], [1, 2, 4, 4, 5]);
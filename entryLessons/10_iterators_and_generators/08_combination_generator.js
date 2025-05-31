function possibleCombinations(arr) {
    if ( arr.length === 0 ) {
        return [[]];
    }

    let result = [];

    for ( let i=0; i<arr.length; i++ ) {
        let current = arr[i];
        let rest = arr.slice(0, i).concat(arr.slice(i+1, arr.length));
        let subPermutations = possibleCombinations(rest);

        for ( elements of subPermutations ) {
            result.push([current, ...elements]);
        }
    }
    return result;
}

// console.log(possibleCombinations(
//     [1, 2, 3]
// ));

console.log(possibleCombinations(
    ['a', 'b', 'c']
));
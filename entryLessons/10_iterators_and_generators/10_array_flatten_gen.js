function* flattenArray(arr) {
    yield arr.flat();
}

let obj = flattenArray(
    [[1,2],[3,4]]
);

let obj2 = flattenArray(['a',['b','c'], ['d','e']]);

console.log(obj.next().value);
console.log(obj2.next().value);
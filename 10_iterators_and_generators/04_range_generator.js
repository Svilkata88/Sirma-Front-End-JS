function* range(start, end) {
    let index = ++start;

    while ( index <= end ) {
        
        yield index;
        index ++
    }
}


const obj = range(1, 6);

console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
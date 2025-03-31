function* charCodeGen(string) {
    for ( let char of string ) {
        yield char.charCodeAt(0);
    }
}

let strObj = charCodeGen('ab');
console.log(strObj.next().value);
console.log(strObj.next().value);
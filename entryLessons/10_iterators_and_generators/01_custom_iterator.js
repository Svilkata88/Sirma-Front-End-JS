const obj = {
    a: 'apple',
    b: 'banana',
    c: 'chery',
};

obj[Symbol.iterator] = function () {
    const keys = Object.keys(this);
    let index = 0;

    return {
        next: () => {
            if ( index < keys.length ) {
                return {
                    value: this[keys[index++]],
                    done: false
                };
            }
            else {
                return {done: true};
            }
        }
    }
}

for ( let val of obj ) {
    console.log(val);
}
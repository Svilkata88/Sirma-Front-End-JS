class StringContainer {
    constructor(str, len) {
        this.innerString = str;
        this.innerLength = len;
        this.initial = str;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if ( this.innerLength < 0 ) {
            this.innerLength = 0;
        }
    }

    toString() {
        if ( this.initial.length > this.innerLength ) {
            return `${this.initial.slice(0, this.innerLength)}...`
        } else if ( this.innerLength === 0 ) {
            return '...';
        }
        return this.initial;
    }
}

let test = new StringContainer('Test', 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
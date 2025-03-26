class OddIterator {
    constructor(array) {
        this.array = array;
    }

    [Symbol.iterator]() {
        let index = 0;
        let arr = this.array;

        return {
            next() {
                while ( index < arr.length ) {
                    let value = arr[index++];
                    if ( value % 2 !== 0 ) {
                        return {
                            value,
                            done: false,
                        }
                    }
                }
                return {
                    done: true
                }
            }
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const iterObj = new OddIterator(arr);

for ( const val of iterObj ) {
    console.log(val);
}
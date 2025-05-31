class SliceIter {
    constructor(start, end, arr) {
        this.start = start;
        this.end = end;
        this.arr = arr;
    }

    [Symbol.iterator]() {
        let i = this.start;
        let end = this.end;
        let data = this.arr;

        return {
            next() {
                if ( i < end && i < data.length ) {
                    return { value: data[i++], done: false };
                }
                return { done: true };
            }
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedArr = new SliceIter(3, 7, arr);

console.log(...slicedArr);
// arr.forEach(el => console.log(typeof el));
// for ( el of slicedArr ) {
//     console.log(el)
// }
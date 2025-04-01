// let comp = (el) => el * 2
let comp = (el) => el.toUpperCase();

function* double(set, comprehentsion) {
    for (let element of set) {
        yield comprehentsion(element);
    }
}

// let arr = [1, 2, 3, 4, 5];
let set = new Set(['a', 'b', 'c']);

console.log(...double(set, comp));

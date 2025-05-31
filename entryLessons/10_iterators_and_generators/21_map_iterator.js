function mapIterator(map) {
    const entries = [...map.entries()]; 
    let index = 0;

    return {
        next() {
            if (index < entries.length) {
                const [key, value] = entries[index++];
                return { value: `${key}-${value}`, done: false };
            }
            return { done: true };
        },
        [Symbol.iterator]() { return this; } 
    };
}

const map1 = new Map([[1, 'a'], [2, 'b'], [3, 'c']]);
const map2 = new Map([['a', 1], ['b', 2], ['c', 3]]);
const map3 = new Map([['x', 'apple'], ['y', 'banana'], ['z', 'cherry']]);

const iter1 = mapIterator(map1);
console.log(...iter1); 
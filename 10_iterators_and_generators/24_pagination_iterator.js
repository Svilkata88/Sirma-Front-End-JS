function paginator(data, pageSize) {
    let index = 0;
    let pageNumber = 1;

    return {
        next() {
            if (index < data.length) {
                // Slice the data based on the index and pageSize
                const endIndex = index + pageSize < data.length ? index + pageSize : data.length;
                const page = `Page ${pageNumber}: ${data.slice(index, endIndex)}`;
                index = endIndex; // Move the index by the page size
                pageNumber++;

                return { value: page, done: false };
            }
            return { done: true };
        },

        [Symbol.iterator]() { return this }
    };

}

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const iter = paginator(data, 2);
console.log(...iter);

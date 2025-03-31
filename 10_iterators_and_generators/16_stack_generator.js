class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    *[Symbol.iterator]() {
        for (let i = this.items.length - 1; i >= 0; i--) {
            yield this.items[i];  
        }
    }
}


const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);

// console.log([...stack1]);  // Output: [3, 2, 1]
console.log(stack1[Symbol.iterator]().next())

// const stack2 = new Stack();
// stack2.push('a');
// stack2.push('b');
// stack2.push('c');

// for (let item of stack2) {
//     console.log(item);  // Output: c, b, a
// }

// const stack3 = new Stack();
// stack3.push(5);
// stack3.push(6);
// stack3.push(7);

// console.log([...stack3]);  // Output: [7, 6, 5]
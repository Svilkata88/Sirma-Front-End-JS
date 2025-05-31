function createIncrObj() {
    return {
        counter: 0,
    
        increment: function() {
            ++this.counter;
        },

        getCount: function() {
            return this.counter;
        }
    }
}

const obj = createIncrObj();
console.log(obj.getCount());
obj.increment();
console.log(obj.getCount());
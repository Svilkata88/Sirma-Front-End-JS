class List {
    constructor () {
        this.numbersList = [];
    }
   
    add(el) {
        this.numbersList.push(el);
        this.numbersList.sort((a, b) => a - b);
    }

    remove(index) {
        if ( index <= this.numbersList.length - 1 ) {
            this.numbersList.splice(index, 1);
        }
    }

    get(index) {
        if ( index <= this.numbersList.length - 1 ) {
            return this.numbersList[index];
        }
    }

    get size() {
        return this.numbersList.length;
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
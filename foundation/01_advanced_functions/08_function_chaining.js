class stringManipulator {
    constructor () {
        this.str = undefined;
    }

    setValue(str) {
        this.str = str;
        return this;
    }

    print() {
        console.log(this.str);
        return this;
    }

    toUpperCase() {
        this.str = this.str.toUpperCase();
        return this;
    }

    toLowerCase() {
        this.str = this.str.toLowerCase();
        return this;
    }

}
const obj = new stringManipulator;
// obj.setValue('Hello').print();
obj.setValue('Hello').toUpperCase().print();
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    bonus() {
        return 200;
    }
}

class Engineer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    bonus() {
        return 100;
    }
}
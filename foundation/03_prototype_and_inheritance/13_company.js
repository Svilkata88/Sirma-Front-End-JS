class Employee {
    constructor(name, age, salary, tasks) {
        this.name = name; 
        this.age = age;
        this.salary = salary;
        this.tasks = tasks;
    }
}

class Junior extends Employee {
    constructor(name, age, salary, tasks) {
        super(name, age, salary, tasks);
    }
    getSalary() {
        return this.salary;
    }

    work() {
        return 'Working on junior stuff...'
    }
}

class Senior extends Employee {
    constructor(name, age, salary, tasks) {
        super(name, age, salary, tasks);
    }
    getSalary() {
        return this.salary;
    }
    work() {
        return 'Working on senior stuff...'
    }
}

class Manager extends Employee {
    constructor(name, age, salary, tasks) {
        super(name, age, salary, tasks);
    }
    getSalary() {
        return this.salary;
    }
    work() {
        return 'Working on managing tasks...'
    }
}
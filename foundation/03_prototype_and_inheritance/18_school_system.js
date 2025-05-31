class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, grade, school) {
        super(name, age);
        this.grade = grade;
        this.school =school;
    }
    study() {
        console.log(`${this.name} is studying...`)
    }
}

class Teacher extends Person {
    constructor(name, age, subject, salary) {
        super(name, age);
        this.subject = subject;
        this.salary =salary;
    }
    teach() {
        console.log(`${this.name} is teaching the students on ${this.subject}!`)
    }
}
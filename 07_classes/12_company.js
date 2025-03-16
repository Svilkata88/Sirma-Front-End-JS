class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if ([name, salary, position, department].some(field => !field)) {
            throw new Error("Invalid input!");
        } 
        else if ( salary < 0 ) {
            throw new Error("Invalid input!");
        }
        
        if ( !this.departments[department] ) {
           this.departments[department] = [];
        }

        this.departments[department].push({name, salary, position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDep = Object.entries(this.departments) // [ departmentName, employeesObjects ] .... finance: [emp1, emp2, emp3]
            .reduce(
                (bestDep, [depName, employees]) => {
                    let avgSalary = employees.reduce((sum, el) => el.salary + sum, 0) / employees.length;

                    return avgSalary > bestDep.avgSalary ? {name: depName, employees: employees, avgSalary: avgSalary} : bestDep;
                },
                { name: "", employees: [], avgSalary: -Infinity }
            );

        return `Best department is: ${bestDep.name}\nAverage salary: ${(bestDep.employees.reduce((sum, el) => el.salary + sum, 0) / bestDep.employees.length).toFixed(2)}\n${
                    bestDep.employees
                    .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
                    .map(empl => `${empl.name} ${empl.salary} ${empl.position}`)
                    .join('\n')
                }`

    }
}



let c = new Company();
c.addEmployee('Stamat', 2000, 'engineer', 'Construction')
c.addEmployee('Peter', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Martin', 500, 'support', 'Construction');
c.addEmployee('Stanley', 2000, 'architect', 'Construction');
c.addEmployee('Stamat', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Peter', 1000, 'graphical designer', 'Marketing');
c.addEmployee('George&quot', 1350, 'HR', 'Human resources');
// console.log(c.departments)
console.log(c.bestDepartment());
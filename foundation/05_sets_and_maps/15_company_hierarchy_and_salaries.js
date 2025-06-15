function companyAnalysys(input) {
    const company = new Map();

    for ( row of input ) {
        const [employee, manager, salary] = row.split(' ');

        if (!company.has(employee)) {
            company.set(employee, [manager, Number(salary), 0]);
        }
    }

    for ( [employeeName, data] of company) {
        data[2] = calculateTotalSalary(employeeName);   
    }

    function calculateTotalSalary(employeeName) {
        const totalSalary = Array.from(company.values())
                .reduce((acc, el) => 
                    {
                        if (el[0] === employeeName) {
                            return el[1] + acc;
                        }
                        else {
                            return acc;
                        }
                    } 
                    ,0) 
            return totalSalary;

        // if (employeeManager==='null') { 
            
        // }
        // else {
        //     const totalSalary = Array.from(company.values())
        //         .reduce((acc, el) => 
        //             {
        //                 if (el[0] === employeeName) {
        //                     return el[1] + acc;
        //                 }
        //                 else {
        //                     return acc;
        //                 }
        //             } 
        //             ,0) 
        //     return totalSalary;
        // }
    }

    const managers = Array.from(company.entries())
        .filter( empRow => {
            const name = empRow[0];
            for ( data of company.values()) {
                if ( name === data[0] ) {
                    return true;
                }
            }
        })
    
    const sortedManagers = managers
                        .sort((a, b) => {
                            const salaryDifference = b[1][2] - a[1][2];
                            if ( salaryDifference !== 0) {return salaryDifference;}
                            return a[0].localeCompare(b[0]);
                        })
                        
    for ( let [ name, data ] of sortedManagers ) {
        console.log(`${name} - Total salary: ${data[2]}`)
        let currentManagerEmployees = [];
        for ( row of company ) {
            if ( row[1][0] === name ) {
                currentManagerEmployees.push(row)
            }
        }
        const empSorted = currentManagerEmployees
            .sort((a, b) => {
                const salaryDifference = b[1][1] - a[1][1];
                if ( salaryDifference !== 0) {return salaryDifference;}
                return a[0].localeCompare(b[0]);
            })
        empSorted.forEach( emp => console.log(` ${emp[0]} -> ${emp[1][1]}`))
    }
}


companyAnalysys(
    [
        "John null 10000",
        "Alice John 7000",
        "Bob John 6500",
        "Charlie Alice 5000",
        "Diana Alice 6000",
        "Anna null 4000",
        "Moli Anna 4000",
        "Eve Bob 4000"
    ]
)
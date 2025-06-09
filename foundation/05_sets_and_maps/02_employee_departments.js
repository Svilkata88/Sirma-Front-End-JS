function company(list) {
    const company = {};

    for ( row of list ) {
        const [employee, department] = row.split(' ');
        company[employee] = department;
    }

    for ( let employee in company ) {
        console.log(`${employee}->${company[employee]}`);
    }
}

company(
    [
        "Alice HR",
        "Bob Marketing",
        "Alice Finance",
        "Eve IT"
    ]    
)
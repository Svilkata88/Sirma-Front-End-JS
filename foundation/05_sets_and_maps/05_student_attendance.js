function students(list) {
    const students = {};

    for ( row of list ) {
        const [student, att] = row.split(' ');
        if ( students[student] != undefined ) {
            students[student] += Number(att);
        }
        else {
            students[student] = Number(att);
        }
    }

    Object.entries(students).sort((a, b) => b[1] - a[1]).forEach(el => console.log(`${el[0]}->${el[1]}`))
}

students(
    [
        "John 5",
        "Mary 8",
        "John 3",
        "Alice 6"
    ]
);
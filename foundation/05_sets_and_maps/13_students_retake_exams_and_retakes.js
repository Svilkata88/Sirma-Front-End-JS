function examResultsAndRetakes(input) {
    exams = {};

    for ( row of input ) {
        const [student, subject, grade, ...rest] = row.split(' ');
        
        if (!exams[student]) {
            exams[student] = {};
            exams[student][subject] = Number(grade);  
        }
        else if (!exams[student][subject]) {
            exams[student][subject] = Number(grade); 
        }
        else if (rest[0]) {
            if (grade > exams[student][subject]) {
                exams[student][subject] = Number(grade);            
            }
        }
    }
    for ( let [studentName, subjects] of Object.entries(exams)) {
        const grades = Object.values(subjects);
        const gradeSum = grades
                .reduce((el, acc) => el+acc, 0);
        const avgGrade = (gradeSum / grades.length).toFixed(2);
                


        console.log(`${studentName}: ${avgGrade}`);
        const sortedSubjects = Object.entries(subjects).sort((a, b) => Object.values(b)[1] - Object.values(a)[1])
        for ( subject of sortedSubjects ) {
            console.log(` ${subject[0]}: ${subject[1]}`);
        }
        // console.log(sortedSubjects)
    }
}

examResultsAndRetakes(
     [
    "John Math 75",
    "John English 80",
    "Mary Math 90",
    "John Math 85 Retake",
    "Mary English 88",
    "Mary Math 70 Retake"
    ]
)
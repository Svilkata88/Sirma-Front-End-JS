class Studen {
    constructor (name, grade, lastYearAvgScore) {
        this.name = name;
        this.grade = grade;
        this.lastYearAvgScore = lastYearAvgScore;
    }
}


function processStudents(draftList) {
    let schoolRegister = [];

    for ( let s of draftList ) {
        let [name, grade, avgScore] = s.split(', ');
        name = name.split(': ')[1];
        grade = Number(grade.split(': ')[1]);
        avgScore = Number(avgScore.split(': ')[1]); 

        let student = new Studen(name, grade, avgScore);
        if ( student.lastYearAvgScore >= 3 ) {
            student.grade += 1;
            schoolRegister.push(student);
        }
    }

    schoolRegister.sort((studentA, studentB) => studentA.grade - studentB.grade)
    
    let sortedByGradeRegister = {};
    for ( let s of schoolRegister ) {
        if ( !sortedByGradeRegister[s.grade]) {
            sortedByGradeRegister[s.grade] = [s];
        } else {
            sortedByGradeRegister[s.grade].push(s);
        }
        
    }
  
    for (let grade in sortedByGradeRegister) {
        console.log(
            `${grade} Grade\n\nList of students: ${
                sortedByGradeRegister[grade]
                    .map(st => st.name)
                    .join(', ')
            }\n\nAverage annual score from last year: \n${
                (sortedByGradeRegister[grade]
                    .reduce((sum, el) => sum + el.lastYearAvgScore, 0) 
                / sortedByGradeRegister[grade].length).toFixed(2)
            }\n\n===\n`
        );
    }
}


processStudents([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00',
]);
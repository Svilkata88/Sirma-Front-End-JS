function admissions(grade, adm) {
    if (grade >= 90) {
        console.log('Admitted')
    } else if (grade >= 80) {
        if (adm >= 2) {
            console.log('Admitted')
        } else {
            console.log('Not admitted')
        }
    } else {
        console.log('Not admitted')
    }
}

admissions(85, 3);
admissions(88, 1);
admissions(91, 0);
admissions(75, 12);

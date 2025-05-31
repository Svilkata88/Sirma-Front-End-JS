function missionVote(votes) {
    let yesCount = 0;
    let noCount = 0;

    for ( let vote of votes ) {
        switch(vote) {
            case 'Yes':
                yesCount++;
                break;
            case 'No':
                noCount++;
                break;
        }
    }
    if ( yesCount > noCount ) {
        console.log( 'Yes' )
    }
    else if ( yesCount < noCount ) {
        console.log( 'No')
    }
    else if ( yesCount === noCount && yesCount > 0 ) {
        console.log( 'Tie')
    }
    else {
        console.log( 'Abstein')
    }
    
}

missionVote(
    ['Yes', 'No', 'Yes', 'Abstein', 'Yes']
);
missionVote(
    ['No', 'No', 'Yes']
);
missionVote(
    ['Yes', 'No']
);
missionVote(
    ['Abstein']
);
missionVote(
    ['No', 'No', 'Abstein', 'Abstein', 'Yes', 'Yes']
);
missionVote(
    ['No', 'Abstein', 'Abstein']
);

missionVote(
    ['No', 'Abstein', 'Abstein', 'Ala Bala', 'Nica']
);

missionVote(
    ['Ala Bala', 'Nica']
);
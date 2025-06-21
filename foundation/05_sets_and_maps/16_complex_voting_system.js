function votingSystem(input) {
    const votes = new Map();

    for ( row of input ) {
        const [voterName, candidateName, timeStamp] = row.split(' ');       

        if(!votes.has(candidateName)) {
            votes.set(candidateName, new Map([[voterName,timeStamp]]))
        }
        else {
            const candidateVotes = votes.get(candidateName);
            for ( [name, data] of votes ) {
                if (candidateName !== name) {
                    if ( data.has(voterName) ) {
                        data.delete(voterName);
                    }
                }
            }
            candidateVotes.set(voterName, timeStamp);
        }  
    }
    let total = 0;
    Array.from(votes.entries())
        .sort((a, b) => {
            const candidateDiff = b[1].size - a[1].size;
            if ( candidateDiff !== 0 ) {
                return candidateDiff;
            }
            return a[0].localeCompare(b[0])
        })
        .forEach( candidate => {
            const name = candidate[0];
            const data = candidate[1];
            const votes = data.size;
            console.log(`${name}: ${votes} votes`)
            total += Number(votes);
        })
        console.log(`Total votes: ${total}`)
}

// votingSystem(
//     [
//     "Alice Bob 2025-05-01T10:00:00Z",
//     "Charlie Dave 2025-05-01T11:00:00Z",
//     "Alice Dave 2025-05-01T12:00:00Z",
//     "Eve Bob 2025-05-01T09:00:00Z",
//     "Eve Bob 2025-05-01T10:00:00Z",
//     "Dan Bob 2025-05-01T11:00:00Z"
//     ]
// )

votingSystem(
    [
        "Alice Bob 2025-05-01T10:00:00Z",
        "Charlie Dave 2025-05-01T11:00:00Z",
        "Alice Dave 2025-05-01T12:00:00Z",
        "Eve Bob 2025-05-01T09:00:00Z"
    ]
)
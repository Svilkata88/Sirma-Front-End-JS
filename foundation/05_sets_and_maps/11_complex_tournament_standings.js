function tournamentStandings(input) {
    const league = new Map();

    for ( row of input ) {
        const [teams, scores] = row.split(' : ');
        let [teamA, teamB] = teams.split(' - ');
        let [scoreA, scoreB] = scores.split('-');
        scoreA = Number(scoreA);
        scoreB = Number(scoreB);

        if (!league.has(teamA)) {
            league.set(teamA, {
                matches:0, 
                wins:0, 
                draws:0, 
                loses:0,
                goalsScored:0, 
                goalsConceded:0, 
                points:0
            });
        }
        if (!league.has(teamB)) {
            league.set(teamB, {
                matches:0, 
                wins:0, 
                draws:0, 
                loses:0,
                goalsScored:0, 
                goalsConceded:0, 
                points:0
            });
        }

        league.get(teamA).matches++;
        league.get(teamB).matches++;
        if (scoreA > scoreB) {
            league.get(teamA).wins++;
            league.get(teamB).loses++;
            league.get(teamA).points += 3;
        }
        else if (scoreA < scoreB) {
            league.get(teamA).loses++;
            league.get(teamB).wins++;
            league.get(teamB).points += 3;
        }
        else {
            league.get(teamA).draws++;
            league.get(teamB).draws++;
            league.get(teamA).points++;
            league.get(teamB).points++;
        }
        league.get(teamA).goalsScored += scoreA;
        league.get(teamA).goalsConceded += scoreB;
        league.get(teamB).goalsScored += scoreB;
        league.get(teamB).goalsConceded += scoreA;
    }
    const sortedLeague = Array.from(league.entries())
        .sort((a, b) => b[1].points - a[1].points);

    for ( team of sortedLeague ) {
        const teamName = team[0];
        const teamStats = team[1]
        console.log(`${teamName} - MP:${teamStats.matches} W:${teamStats.wins} D:${teamStats.draws} L:${teamStats.loses} GS:${teamStats.goalsScored} GC:${teamStats.goalsConceded} Pts:${teamStats.points}`)
        // console.log(team)
    }

}

tournamentStandings(
     [
        "Lions - Tigers : 3-2",
        "Bears - Lions : 1-1",
        "Tigers - Bears : 0-0",
        "Lions - Bears : 2-4"
    ]
)
function bugTracker(input) {
    const bugs = {};

    for ( row of input ) {
        const [projectName, bugID, ...rest] = row.split(' ');
        const status = rest.join(' ');

        if (!bugs[projectName]) {
            bugs[projectName] ={};
            bugs[projectName][bugID] = status;
        }
        else if (!bugs[projectName][bugID]) {
            bugs[projectName][bugID] = status;
        }
    }

    const sortedBugs = Object.entries(bugs)
        .sort( (a, b) => Object.values(b[1]).filter(el => el==='open').length - Object.values(a[1]).filter(el => el==='open').length )

    for ( let [name, bug] of sortedBugs ) {

        console.log(name);
        const openBugsCount = Object.values(bug).filter(bug => bug==='open').length;
        const closedBugsCount = Object.values(bug).filter(bug => bug==='closed').length;
        const inProgressBugsCount = Object.values(bug).filter(bug => bug==='in progress').length;
        console.log(`Open: ${openBugsCount}`);
        console.log(`Closed: ${closedBugsCount}`);
        console.log(`In Progress: ${inProgressBugsCount}`);
        console.log(`-----------------`)
        
    }
    // console.log(sortedBugs)
}


bugTracker(
     [
        "Alpha 1001 open",
        "Beta 1002 closed",
        "Alpha 1003 in progress",
        "Alpha 1004 open",
        "Beta 1005 open",
        "Beta 1006 open",
        "Beta 1007 open",
        "Gamma 1006 closed",
        "Omega 1008, open",
        "Omega 1009, open",
    ]
)
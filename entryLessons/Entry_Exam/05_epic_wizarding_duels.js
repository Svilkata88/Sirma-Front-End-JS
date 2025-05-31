function epicDuels(allSpells) {
    allSpells = allSpells.split('');
    let duel = true;
    let temp = [];
    let spells = ['/', '!', '<'];
    let counterSpells = ['\\', '!', '>'];

    if ( allSpells.length % 2 !== 0 || allSpells.length === 0 ) {
        duel = false;
    }
    else {
        while (allSpells.length > 0 ) {
            // if ( !allSpells.some(el => counterSpells.includes(el)) ) {
            //     duel = false;
            //     break;
            // } redundant check!          
            temp.push(allSpells.shift());
    
            if ( 
                (temp[temp.length-2] === spells[0] && temp[temp.length-1] === counterSpells[0])
                ||
                (temp[temp.length-2] === spells[1] && temp[temp.length-1] === counterSpells[1])
                ||
                (temp[temp.length-2] === spells[2] && temp[temp.length-1] === counterSpells[2])
             ) {
                temp.pop();
                temp.pop();
            }
        }
    } 

    if(temp.length > 0) {duel=false;}
    console.log( duel ? 'Epic' : 'Not Epic') 
}

// epicDuels("/\\/\\//\\/\\\\");            
// epicDuels('//!!\\//<!!>\\\\\\');       
// epicDuels("///\\\\");               
// epicDuels("<!>!");                  
// epicDuels("/</!!>\\"); 

epicDuels(""); 
epicDuels("><\\/"); 
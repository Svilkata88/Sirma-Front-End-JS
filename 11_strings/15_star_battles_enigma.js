function starBattlesEnigma(messages) {
    for ( let message of messages ) {
        const reg = /[A-Za-z]+/g;
        const count = (message.match(reg) || []) 
            .reduce((acc, el) => {
                return acc + [...el].filter(x => ['s', 't', 'a', 'r'].includes(x.toLowerCase())).length;
            }, 0);
            
        message = message.split('').map( ch => {
            
            let n = ch.charCodeAt(0);
            let newN = n - count;
            return String.fromCharCode(newN);
            
        })

        let temp = [];
        let planetName, population, attackType, soldierCount;
        
        for (let ch of message) {
            switch (ch) {
                case '@':
                    temp = [];
                    break;
                case ':':
                    planetName = temp.join('');
                    temp = [];
                    break;
                case '-':
                    let i = temp.join('').indexOf('!');
                    population = temp.join('').slice(0, i);
                    attackType = temp.join('').slice(i);
                    temp = [];
                    break;
                default:
                    temp.push(ch);
            }
        }
        console.log(message.join(''))
        if ( temp.join('').includes(['!A!' || '!D!']) ) {
            console.log('Error')
            continue;
        }
        soldierCount = temp.join('').slice(1).match(/[0-9]+/)[0];
        let attackedPlanets = planetName.match(/[0-9]+/) ? planetName.match(/[0-9]+/)[0] : 0;
    
        console.log(
            `${attackType[1]==='A' ? 'Attacked' : 'Destroyed'} planets: ${attackedPlanets}` 
            + `${attackedPlanets ? '\n-> ' + planetName.match(/[A-Za-z]+/) : ''}`
        )
    }
}

// starBattlesEnigma(
//     ['STCDoghudd4=53333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']
// );

starBattlesEnigma(
    [
        'tt("DGsvywgerx>6444444444%H%1B9444', 
        'GQhrr|A977777(H(TTTT',
        'EHfsytsnhf?8555&I&2C9555SR'
    ]
);

function pascalCase(text) {
    let words = [];
    let word = [];
    text = text.split('');

    for ( let ch of text ) { 
        
        if ( ch === ch.toUpperCase() ) {
            if (text[0] === ch) {
                word.push(ch);
                continue;
            }
            words.push(word.join(''));
            word = [];
        }
        word.push(ch);      
    }
    words.push(word.join(''));

    console.log(words.join(', '));
}

pascalCase('SplitMeIfYouCan');
pascalCase('ThisIsSoAnnoying');
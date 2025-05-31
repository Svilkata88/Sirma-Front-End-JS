function symbolsReplace(text) {
    let symbols = text.split('');
    let newSymbols = symbols.map( ( ch, i, symbols ) => {
        if ( symbols[i+1] !== ch ) {
            return ch;
        }
        return
    })
    console.log(newSymbols.join(''));
}

// symbolsReplace(
//     'aaaaabbbbbcdddeeeedssaa'
// );

symbolsReplace(
    'qqqwerqwecccwd'
);
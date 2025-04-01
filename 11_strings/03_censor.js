function censor(text, censorWord) {
    let startIndex = text.indexOf(censorWord[0]);
    let endIndex = startIndex + censorWord.length;
    // const censoredWord = text.slice(startIndex, endIndex);
    let newText = text.substring(0, startIndex) + "*".repeat(censorWord.length) + text.substring(endIndex);

    console.log(newText);
}

censor('A small sentence with some words', 'small');
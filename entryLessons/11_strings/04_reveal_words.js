function revealWords(searchedWords, text) {
    let wordsList = searchedWords.split(', '); // Convert searched words into an array
    let textArray = text.split(' '); // Split the text into words

    textArray = textArray.map(word => {
        let match = wordsList.find(w => w.length === word.length && word.startsWith('*'));
        return match ? match : word;
    });

    console.log(textArray.join(' ')); // Convert array back to string
}

revealWords(
    'great, amazing',
    'JavaScript is ***** and ******* programming language'
);
function sbstr(word, text) {
    const regex = new RegExp(`${word}`, "i");
    match = text.match(regex);
    if ( match ) {
        console.log(match[0]);
    }
    else {
        console.log(`${word} not found!`)
    }   
}

// sbstr(
//     'javascript',
//     'JavaScript is the best programming language'
// );

sbstr(
    'python',
    'JavaScript is the best programming language'
);


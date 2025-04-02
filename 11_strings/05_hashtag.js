function findHashtag(text) {
    // const textList = text.split(' ');
    const regex = /#\b[a-zA-Z]+\b/g;
    let words = text.match(regex);

    for ( let word of words ) {
        console.log(word.slice(1));
    }
    
}

// findHashtag(
//     'Everyone uses # to tag a #special word in #facebook'
// );

findHashtag(
    'The symbol # is known #variously in English-speaking #regions as the #number sign'
);


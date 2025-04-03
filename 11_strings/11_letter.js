
function wReplace(index, text, wordsList) {
    let wLength = 0;
    for ( let j=index; j<text.length; j++) {
        if ( text[j] === '_' ) {
            wLength++;
        }
        else {
            break;
        }
    }

    let word = wordsList.find( w => w.length === wLength );
    if (!word) return text;

    return text.slice(0, index) + word + text.slice(index+wLength);
}

function letter(text, words) {
    for ( let i=0; i<text.length; i++ ) {
        if ( text[i] === '_' ) {
            text = wReplace(i, text, words );
        }
    }
    console.log(text);
}

letter(
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so many _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brothers ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
);
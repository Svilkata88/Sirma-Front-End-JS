function matchDates(text) {
    // text[0] = text[0].split(', ');
    let reg = /\b\d{2}([\/.-])[A-Z][a-z]{2}\1\d{4}/g;
    let words = text[0].match(reg);
    words = words.map(w =>  `Day: ${w.slice(0, 2)}, Month: ${w.slice(3, 6)}, Year: ${w.slice(7)}`);

    console.log(words.join('\n'));
}

matchDates(
    ['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23#09#1973, 1/Feb/2016']
);
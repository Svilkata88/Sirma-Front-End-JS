function matchFullNumber(text) {
    const reg = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    const matches = text.match(reg);

    console.log(matches.join(', '));
}

matchFullNumber(
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
);
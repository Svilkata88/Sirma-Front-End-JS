function vowelsSum(word) {
    let sum = 0;
    let vowels = {
        a : 1,
        e : 2,
        i : 3,
        o : 4,
        u : 5
    };


    for (let letter of word) {
        if (letter in vowels) {
        sum += vowels[letter] 
        }
    }

    console.log(sum);
}

vowelsSum('hello');
vowelsSum('hi');
vowelsSum('bye');
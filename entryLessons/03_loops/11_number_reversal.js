function reversal(n) {
    n = n.toString().split('');
    for (let i=0, j=n.length-1; i < Math.floor(n.length / 2); i++, j--) {
        let el1 = n[i];
        let el2 = n[j];

        n[i] = el2;
        n[j] = el1;
    };

    console.log(n.join(''));
}

reversal(123);
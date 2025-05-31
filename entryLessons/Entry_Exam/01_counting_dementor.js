function dimentorsCounting(initDimentors, n, hours) {
    let dimentors = initDimentors;
    let totalDimentors = 0;

    for ( let i=0; i<hours; i++) {
        totalDimentors += dimentors;
        dimentors += n;
    }
    
    console.log(totalDimentors);
}

// dimentorsCounting(5, 2, 3);
// dimentorsCounting(7, 1, 2);
// dimentorsCounting(10, -1, 1);
// dimentorsCounting(8, -2, 3);

dimentorsCounting(8, 0, -3);
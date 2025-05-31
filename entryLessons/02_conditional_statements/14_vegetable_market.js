function market(vegetable, day, qtty) {
    let working_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let weekend = ['Sunday', 'Saturday'];
    let prices = {};

    if ( working_days.includes(day) ) {
        prices = {
            'tomato' : 2.50,
            'onion' : 1.20,
            'lettuce' : 0.85,
            'cucumber' : 1.45, 
            'pepper' : 5.50,
        }

    } else if ( weekend.includes(day) ) {
        prices = {
            'tomato' : 2.80,
            'onion' : 1.30,
            'lettuce' : 0.85,
            'cucumber' : 1.75, 
            'pepper' : 3.50,
        }

    } 

    if (prices[vegetable] !== undefined) {
        console.log((prices[vegetable] * qtty).toFixed(2));
    } else {
        console.log("error");
    }
}

market("tomato", "Monday", 2);  // Output: 5.00
market("pepper", "Sunday", 1);  // Output: 3.50
market("banana", "Monday", 3);  // Output: error
market("tomato", "Holiday", 2); // Output: error
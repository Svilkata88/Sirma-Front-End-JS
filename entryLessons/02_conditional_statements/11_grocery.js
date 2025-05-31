function shop(product, city, qtty) {
    let products = {
        "tea": 0,
        "water": 0,
        "juice": 0,
        "sweets": 0,
        "chips": 0
    };

    if ( city === 'Sofia' ) {
        products["tea"] = 0.5;
        products["water"] = 0.80;
        products["juice"] = 1.20;
        products["sweets"] = 1.45;
        products["chips"] = 1.60;
    } else if ( city === 'Plovdiv' ) {
        products["tea"] = 0.40;
        products["water"] = 0.70;
        products["juice"] = 1.15;
        products["sweets"] = 1.30;
        products["chips"] = 1.50;
    } else if ( city === 'Varna' ) {
        products["tea"] = 0.45;
        products["water"] = 0.70;
        products["juice"] = 1.10;
        products["sweets"] = 1.35;
        products["chips"] = 1.55;
    }

    let costs = products[product] * qtty;
    console.log(costs.toFixed(2));
}

shop('juice', 'Sofia', 6)
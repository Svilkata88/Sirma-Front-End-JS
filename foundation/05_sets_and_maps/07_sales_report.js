function salesReport(list) {
    const sales = {};

    for ( row of list ) {
        const [ seller, product, qtty, price ] = row.split(' ');

        if ( sales[seller] && sales[seller][product] ) {
            sales[seller][product][0] += Number(qtty);
            sales[seller][product][2] = sales[seller][product][0] * sales[seller][product][1]
        }
        else {
            if (!sales[seller]) {
                sales[seller] = {};
            }
            sales[seller][product] = [Number(qtty), Number(price), Number(qtty) * Number(price)];
        };
    }

    for ( let seller in sales ) {
        const s = sales[seller];
        let total = 0;
        for ( let pr in s ) {
            total += s[pr][2];
        }
        sales[seller]['total'] = total;
    }

    const sortedSales = Object.entries(sales)
        .sort( (a, b) => a[0].localeCompare(b[0]) )
        .forEach( seller => {
            console.log(`${seller[0]}: $${seller[1].total}`)
            for ( let product in seller[1] ) {
                if (product === 'total') {
                    continue;
                }
                // console.log(seller[1][product] )
                
                console.log(`- ${product} -> ${seller[1][product][0]}`)
            }
        })
 
    
}

salesReport(
    [
        "Alice Apple 10 2",
        "Bob Banana 5 1",
        "Alice Apple 5 2",
        "Bob Apple 2 2",
        "Alice Banana 3 1"
    ] 
)
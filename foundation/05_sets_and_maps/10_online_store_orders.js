function onlineStore(input) {
    const orders = {};

    for (let row of input) {
        const [customer, product, qtty, price] = row.split(' ');

        if (!orders[customer]) {
            orders[customer] = { total: 0 };
        }

        if (!orders[customer][product]) {
            orders[customer][product] = [Number(qtty), Number(price)];
            orders[customer].total += Number(qtty) * Number(price);
        } else {  
            orders[customer].total += Number(qtty) * Number(price);

            orders[customer][product][0] += Number(qtty);
            orders[customer][product][1] = Number(price); 
        }
    }

    const sortedOrders = Object.entries(orders)
        .sort( (customerA, customerB) => customerB.total - customerA.total)
        .forEach(customer => {
            console.log(`${customer[0]}: $${customer[1].total}`);
            for ( let product in customer[1]) {
                if (product!=='total') {
                    console.log(`- ${product}->${customer[1][product][0]}`)
                }
            }
        })
}

onlineStore(
     [
        "John TV 1 500",
        "Anna Phone 2 300",
        "John TV 1 450",
        "Anna TV 1 450",
        "John Phone 1 310"
    ]

);
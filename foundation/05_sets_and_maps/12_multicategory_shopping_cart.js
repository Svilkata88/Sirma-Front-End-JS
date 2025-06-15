function shoppingCart(input) {
    const cart = {total:0};

    for ( row of input ) {
        const [customer, category, product, qtty, price] = row.split(' ');
        
        if (!cart[customer]) {
            cart[customer] = {};
            cart[customer][category] = {};
            cart[customer][category][product] = [Number(qtty), Number(price), Number(qtty)*Number(price)];
            cart[customer].total = Number(qtty)*Number(price);
            cart[customer].productsQtty = Number(qtty);
        }
        else if (cart[customer] && !cart[customer][category]) {
            cart[customer][category] = {};
            cart[customer][category][product] = [Number(qtty), Number(price), Number(qtty)*Number(price)];
            cart[customer].total += Number(qtty)*Number(price);
            cart[customer].productsQtty += Number(qtty);
        }
        else if (cart[customer] && cart[customer][category] && !cart[customer][category][product]) {
            cart[customer][category][product] = [Number(qtty), Number(price), Number(qtty)*Number(price)];
            cart[customer].total += Number(qtty)*Number(price);
            cart[customer].productsQtty += Number(qtty);
        }
        else {
            cart[customer][category][product][0] += Number(qtty)
            cart[customer][category][product][2] = Number(qtty)*Number(price);
            cart[customer].total += Number(qtty)*Number(price);
            cart[customer].productsQtty += Number(qtty);
        }
        cart.total += Number(qtty)*Number(price);
    }

    for ( let customer in cart ) {
        if ( cart[customer].productsQtty > 10 ) {
            cart[customer].total *= 0.9;
        }
    }

    // let allQuantities = [];

    // for (const customer of Object.values(cart)) {
    //     for (const category of Object.values(customer)) {
    //         for (const product of Object.values(category)) {
    //             allQuantities.push(product[0]); 
    //         }
    //     }
    // }
    // allQuantities = allQuantities.reduce((el, acc) => acc + el, 0);
    // if(allQuantities > 10) {
    //     cart.total = cart.total * 0.9;
    // }

    console.log(cart);
}

shoppingCart(
    [
    "Alice Electronics Phone 2 500",
    "Alice Grocery Bread 5 2",
    "Alice Electronics Laptop 1 1200",
    "Bob Grocery Milk 8 1.5",
    "Bob Electronics Headphones 1 100",
    "Bob Electronics Headphones 1 100",
    "Bob Electronics Headphones 1 100"
    ]
)
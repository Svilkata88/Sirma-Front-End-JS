function productPrices(productInput) {
    const products = {};

    for ( row of productInput ) {
        const [product, price] = row.split(' ');
        products[product] = Number(price);
    }

    const sortedEntries = Object.entries(products)
        .sort((a, b) => a[1] - b[1])
        .forEach(entrie => console.log(`${entrie[0]}->${entrie[1]}`));
}

productPrices(
    [
        "Apple 2.5",
        "Banana 1.2",
        "Apple 3",
        "Carrot 1"
    ]
      
);
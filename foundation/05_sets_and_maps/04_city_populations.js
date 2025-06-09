function population(list) {
    const pop = {};

    for ( row of list ) {
        const [city, population] = row.split(' ');
        if ( pop[city] != undefined ) {
            pop[city] += Number(population);
        }
        else {
            pop[city] = Number(population);
        }
    }

    Object.entries(pop).sort((a, b) => a[0].localeCompare(b[0])).forEach(el => console.log(`${el[0]}->${el[1]}`))
}

population(
    [
        "Sofia 1300000",
        "Plovdiv 340000",
        "Varna 450000",
        "Sofia 50000"
    ]
);
function town(obj) {
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

t = {
    name: 'Sofia',
    population: 1234567,
    country: 'Bulgaria',
    postcode: 1000
    }

town(t);
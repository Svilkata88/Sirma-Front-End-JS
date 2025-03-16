class Car {
    constructor(brand, model, quantity = 0) {
        this.brand = brand;
        this.models = { [model]: quantity };
    }
}

function carRegister(carsList) {
    let carRegister = [];

    for ( let car of carsList ) {
        let [brand, model, qtty] = car.split(' | ');
        qtty = Number(qtty);
        let newCar = new Car(brand, model, qtty);


        let brandEntry = carRegister.find(entry => entry.brand === brand); 

        if (!brandEntry) {
            carRegister.push(newCar);
        }
        else {
            if (!brandEntry.models[model]) {
                brandEntry.models[model] = 0;
            }
            brandEntry.models[model] += qtty;
        }
    }
 
    let result = '';
    for ( let { brand, models } of carRegister ) {
        
        result += `${brand}\n`; 
        result += Object.entries(models) 
            .map(([model, quantity]) => `###${model} -> ${quantity}`) 
            .join('\n') + '\n';
    }
    console.log(result);
}


carRegister(
    ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)
function luggageCosts(weight, dimensions) {
    let price = 0;
    let weight_flag;
    let dimensions_step; 

    if (weight > 50) {
        price += 100;
        weight_flag = true;
    };

    if (dimensions > 158) {
        if (dimensions <= 178) {
            price += 50;
            dimensions_step = 1;
        } else if (dimensions <= 208) {
            price += 100;
            dimensions_step = 2;
        } else {
            price += 200;
            dimensions_step = 2;
        }
    }

    if (weight_flag && dimensions_step) {
        price += 50;
        if ( dimensions_step === 1) {
            console.log(`$${price} (Overweight + Slightly oversize + Handling)`);
        } else if ( dimensions_step === 2) {
            console.log(`$${price} (Overweight + Oversize + Handling)`);
        }
    } else if (weight_flag && !dimensions_step) {
        console.log(`$${price} (Overweight`);
    } else if (!weight_flag && dimensions_step) {
        if ( dimensions_step === 1) {
            console.log(`$${price} (Slightly oversize)`);
        } else if ( dimensions_step === 2) {
            console.log(`$${price} (Oversize)`);
        }
    }
}

luggageCosts(52, 160);
luggageCosts(48, 180);
luggageCosts(55, 190);
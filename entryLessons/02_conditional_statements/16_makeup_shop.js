function makeupShop(p_renovation, c_powders, c_lipsticks, c_spirals, c_shadows, c_correctors) {
    let powder_price = 2.60;
    let lipstick_price = 3.00;
    let spiral_price = 4.10;
    let shadows_price = 8.20;
    let concealer_price = 2.00;
    let discount = 1;

    if (c_powders + c_lipsticks + c_spirals + c_shadows + c_correctors >= 50) {
        discount = 0.75;
    }

    let total_earned = c_powders * powder_price + 
                    c_lipsticks * lipstick_price + 
                    c_spirals * spiral_price + 
                    c_shadows * shadows_price + 
                    c_correctors * concealer_price;
    total_earned = total_earned * discount;
    total_earned = total_earned * 0.9;

    if ( total_earned >= p_renovation ) {
        console.log(`Yes! ${(total_earned - p_renovation).toFixed(2)} BGN left.`)
    } else {
        console.log(`Not enoght money! ${(p_renovation - total_earned).toFixed(2)} BGN needed.`)
    }
}

makeupShop(40.8, 20, 25, 30, 50, 10);
makeupShop(320, 8, 2, 5, 5, 1);
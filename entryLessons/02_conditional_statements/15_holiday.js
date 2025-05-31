function holiday(budget, season) {
    let destination;
    let type;
    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            budget = budget * 0.3;
            type = 'Camp';
        } else if (season === 'winter') {
            budget = budget * 0.7;
            type = 'Hotel';
        }

    } else if (budget <= 1000) {
        destination = 'Europe';
        if (season === 'summer') {
            budget = budget * 0.4;
            type = 'Camping';
        } else if (season === 'winter') {
            budget = budget * 0.8;
            type = 'Hotel';
        }

    } else {
        destination = 'Asia';
        budget = budget * 0.9;
        type = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${budget.toFixed(2)}`);
}

holiday(50, 'summer');
holiday(75, 'winter');
holiday(312, 'summer');
holiday(678.53, 'winter');
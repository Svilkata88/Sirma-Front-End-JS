function faceFigures(figure, ...args) {
    switch(figure) {
        case 'square':
            let side = args[0];
            face = side**2;
            console.log(face.toFixed(2));
            break;
        case 'rectangle': {
            let sideA = args[0];
            let sideB = args[1];
            face = (sideA * sideB);
            console.log(face.toFixed(2));
            break;
        }
        case 'circle': {
            let r = args[0];
            face = Math.PI * r**2;
            console.log(face.toFixed(2));
            break;
        }
        case 'triangle': {
            let sideA = args[0];
            let sideB = args[1];
            face = (sideA * sideB) / 2;
            console.log(face.toFixed(2));
            break;
        }
    }
}

faceFigures('circle', 10);
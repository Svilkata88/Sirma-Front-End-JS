function calculator(num1, num2, operator) {
    if (operator === 'add') {
        console.log(num1 + num2);
    } else if (operator === 'subtract') {
        console.log(num1 - num2);
    } else if (operator === 'divide') {
        console.log(num1 / num2);
    } else if (operator === 'multiply') {
        console.log(num1 * num2);
    }
}

calculator(2, 2, 'multiply');
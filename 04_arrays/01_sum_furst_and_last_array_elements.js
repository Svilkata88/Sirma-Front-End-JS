function sumFirstLast(array) {
    let el1 = array[0];
    let el2 = array[array.length-1];
    let sum = Number(el1) + Number(el2);

    console.log(sum);
}

sumFirstLast(['10', '17', '22', '33']);
sumFirstLast(['20', '30', '40']);
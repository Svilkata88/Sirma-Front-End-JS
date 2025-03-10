function toJSON(name, surname, eyeColor) {
    let obj = {name, surname, eyeColor};
    let jsonObj = JSON.stringify(obj);
    console.log(jsonObj);
}


toJSON('Ivan', 'Ivanov', 'blue');
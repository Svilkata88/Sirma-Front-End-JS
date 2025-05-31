function jsonToObj(jsonObj) {
    let obj = JSON.parse(jsonObj);
    for ( let k in obj ) {
        console.log(`${k}: ${obj[k]}`);
    }
}

jsonToObj('{"name": "Ivan", "age": 40, "town":"Sofia"}');
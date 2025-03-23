function excelToNumber(column) {
    let cols = column.split('');
    
    let sum = cols.reduce((sum, el) => {
        return sum * 26 + (el.charCodeAt(0) - 64);
    }, 0);
    
    console.log(sum);
}

excelToNumber('AB');
excelToNumber('CZ');
excelToNumber('MM');
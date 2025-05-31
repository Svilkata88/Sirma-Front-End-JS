String.prototype.ensureStart = function (str) {
    return this.startsWith(str);
}

String.prototype.ensureEnd = function (str) {
    return this.endsWith(str);
}

String.prototype.isEmpty = function() {
    return this.length === 0;
}

String.prototype.capitalize = function() {
    const newStr = this.slice(0, 1).toUpperCase() + this.slice(1);
    return newStr;
}

String.prototype.truncateWords = function(n) {
    if (this.length - n === 1) {
        return this.slice(0, n) + '.'
    }
    else if (this.length - n === 2) {
        return this.slice(0, n) + '..'
    }
    else if (this.length - n === 3) {
        return this.slice(0, n) + '...'
    }
    else {
        return this;
    }
}



const str = 'abcde';
console.log(str.ensureStart('abv'));
console.log(str.ensureEnd('cde'));
console.log(str.isEmpty());
console.log(str.capitalize());
console.log(str.truncateWords(2));


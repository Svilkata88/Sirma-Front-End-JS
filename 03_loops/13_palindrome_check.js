function palindromeCheck(str) {
    flag = true;
    for (let i=0, j=str.length-1; i < Math.floor(str.length / 2); i++, j--) {
        if (str[i] !== str[j]) {
            flag = false;
            break;
        }
    } 
    console.log(flag)
} 

palindromeCheck('radar');
palindromeCheck('hello');
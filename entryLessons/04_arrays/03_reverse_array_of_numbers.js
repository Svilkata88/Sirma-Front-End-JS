function arrayReverse(n, arr) {
    let newArr = arr.slice(0, n);
    newArr = newArr.reverse();

    console.log(newArr);
}


arrayReverse(3, [10, 20, 30, 40, 50, 60]);
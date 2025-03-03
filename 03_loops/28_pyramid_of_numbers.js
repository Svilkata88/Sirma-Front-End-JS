function pytamid(n) {
    let num = 1;

    for ( i=1; i<=n; i++) {
        let nums = []
        for ( j=i; j<=num; j++) {
            nums.push(j)
            num ++;
        }
        console.log(nums.join(' '))
    }
}

pytamid(10)

// not finished!s
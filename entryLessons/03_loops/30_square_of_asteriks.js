function asterisksSquare(n) {
    for ( i=0; i<n; i++) {
        let nums = [];
        for ( j=0; j<n; j++) {
            if ( j === 0) {
                nums.push('*')
            }
            else {
                nums.push(' *')
            }
        }
        console.log(nums.join(''));
    }
}

// asterisksSquare(3);
asterisksSquare(6);
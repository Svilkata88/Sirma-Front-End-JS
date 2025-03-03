function squareFrame(n) {
    let nums = [];
    for ( i=0; i<n; i++) {
        if ( i===0 || i===n-1 ) {
            nums.push('+' + ' -'.repeat(n-2) + ' +')
        }
        else {
            nums.push('|' + ' -'.repeat(n-2) + ' |')
        }
    }
    console.log(nums.join('\n'))
}

squareFrame(5);
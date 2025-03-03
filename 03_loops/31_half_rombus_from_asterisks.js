function halfRombus(n) {
    let nums = [];
    for ( i=0; i<n; i++) {
        nums.push('*' + ' *'.repeat(i))
        
    }
    console.log(nums.join('\n'));
    nums = [];
    for ( j=n-2; j>=0; j--) {
        nums.push('*' + ' *'.repeat(j))
        
    }
    console.log(nums.join('\n'))
    
}


halfRombus(5)
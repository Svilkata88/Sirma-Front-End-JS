function printRhombus(n) {
    
    for (let i = 1; i <= n; i += 2) {
        console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
    }


    for (let i = n - 2; i >= 1; i -= 2) {
        console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
    }
}

printRhombus(3);

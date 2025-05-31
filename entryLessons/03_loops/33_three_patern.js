function threePattern(n) {
    for (let i = 1; i <= n * 2 - 1; i += 2) {
        console.log(" ".repeat((n * 2 - 1 - i) / 2) + "*".repeat(i));
    }
}

threePattern(5);

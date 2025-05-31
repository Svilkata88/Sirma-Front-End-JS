function matchFullName(names) {
    const reg = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    const result = names.match(reg);

    console.log(result.join(', '));
}

matchFullName(
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov'
);
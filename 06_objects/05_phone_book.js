function phonebook(array) {
    for ( let contact of array ) {
        contact = contact.split(' ');
        let name = contact.shift();
        let number = contact.join(' ');
        console.log(`${name} -> ${number}`);
    }
}


phonebook(['Peter 0888 657 212', 'Bob 0899 657 212', 'Peter 123123']);
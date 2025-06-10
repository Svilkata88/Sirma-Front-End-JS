
function library(inputList) {
    const library = {'books':{}, 'borrowers':{}};
    for ( row of inputList ) {
        const [ command, ...rest ] = row.split(':');

        if (command==='AddBook') {
            const [ title, author, copies ] = rest;

            if (!library['books'][title]) {
                library['books'][title] = [author, Number(copies)];
            }
            else {
                library['books'][title][1] += Number(copies);
            }
        }
        else if (command==='Borrow') {
            const [ title, borrower ] = rest;
            if (!library['borrowers'][borrower]) {
                library['borrowers'][borrower] = [];
            }
            if (library['books'][title][1] > 0) {
                library['books'][title][1]--;
                library['borrowers'][borrower].push(title)
            }

        }
        else if (command==='Return') {
            const [ title, borrower ] = rest;
            library['books'][title][1]++;
            const index = library['borrowers'][borrower].indexOf(title);
            library['borrowers'][borrower].splice(index, 1);
        }
    }

    for ( let book in library.books ) {
        console.log(`${book} -> ${library.books[book][1]} copies left`)
        let result = [];
        // console.log(library.borrowers)
        for ( let el in library.borrowers) {
            if ( library.borrowers[el].includes(book) )
                result .push(el);
        }
        console.log(`Borrowers: ${result.join(', ')}`);
    }
}

library(
    [
'AddBook:The Hobbit:J.R.R. Tolkien:3',
'AddBook:1984:George Orwell:2',
'Borrow:The Hobbit:Alice',
'Borrow:The Hobbit:Bob',
'Borrow:1984:Charlie',
'Return:The Hobbit:Alice',
'Borrow:The Hobbit:Dave',
]
)
function library(list) {
    const books = {};

    for ( row of list ) {
        const [book, copies] = row.split(':');
        if ( books[book] != undefined ) {
            books[book] += Number(copies);
        }
        else {
            books[book] = Number(copies);
        }
    }
    
    for ( let book in books ) {
        console.log(`${book}->${books[book]}`)
    }
}

library( [
    "The Hobbit:5",
    "Harry Potter:10",
    "The Hobbit:3",
    "Game of Thrones:7"
    ]
)
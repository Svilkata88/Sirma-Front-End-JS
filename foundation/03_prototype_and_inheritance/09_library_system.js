class LibraryItem {
    constructor(title, author) {
        this.title = title;
        title.author = author;
    }
}

class Book extends LibraryItem {
    constructor(title, author) {
        super(title, author)
        this.page = 0;
    }

    savePage(page) {
        this.page = page;
    }
}

class Magazine extends LibraryItem {
    constructor(title, author, edition, page) {
        super(title, author)
        this.edition = edition;
        this.page = page;
    }

    savePage(page) {
        this.page = page;
    }
}
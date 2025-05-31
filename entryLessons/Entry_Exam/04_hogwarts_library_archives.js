function libraryArchives(records, searchedRecord) {
    let first = 0;
    let last = 0;

    if ( !records.includes(searchedRecord) ) {
        console.log('Record not found')
    }
    else {
        for ( let i=0; i<records.length; i++){
            if (records[i] === searchedRecord) {
                first = i;
                break;
            }
        }
        for ( let i=records.length-1; i>=0; i--){
            if (records[i] === searchedRecord) {
                last = i;
                break;
            }
        }

        console.log(`First Occurrence: ${first}`);
        console.log(`Last Occurrence: ${last}`);
    }

}

libraryArchives(
    ['Harry', 'Hermione', 'Harry', 'Ron'], 'Harry'
);

libraryArchives(
    ['Ginny', 'Luna', 'Neville', 'Ginny'], 'Ginny'
);

libraryArchives(
    ['Ron', 'Hermione', 'Luna'], 'Dumbledore'
);

libraryArchives(
    ['Dobby', 'Ron', 'Hermione', 'Harry'], 'Harry'
);

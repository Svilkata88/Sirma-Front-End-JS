class Ticket {
    constructor (destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}


function ticketsProcess(tickets, sortingCriteria) {
    let ticketsData = [];

    for ( let t of tickets ) {
        let [destination, price, status] = t.split('|');
        let ticket = new Ticket(destination, price, status);
        ticketsData.push(ticket);
    }

    if ( sortingCriteria === 'destination' ) {
        return ticketsData.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if ( sortingCriteria === 'price' ) {
        return ticketsData.sort((a, b) => a.price - b.price);
    } else if ( sortingCriteria === 'status' ) {
        return ticketsData.sort((a, b) => a.status.localeCompare(b.status));
    }
}

// console.log(ticketsProcess(
//     ['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination',
// ))


console.log(ticketsProcess(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status',
))
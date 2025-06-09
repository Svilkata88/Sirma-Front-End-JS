function eventTrucker(list) {
    const events = {};
    for ( row of list ) {
        const [event, attendeece] = row.split(' -> ');
        if (events[event] != undefined ) {
            events[event].push(...attendeece.split(','))
        }
        else {
            events[event] = attendeece.split(',');
        }
    }
    
    for ( let event in events ) {
        const atts = events[event];
        events[event] = [...new Set(atts)]
    }

    const eventsSorted = Object.entries(events).sort((a, b) => b[1].length - a[1].length)
    eventsSorted.forEach( event => {
            console.log(`${event[0]}: ${event[1].length} attendees`);
            event[1]
                .sort((a, b) => a.localeCompare(b))
                .forEach(att => console.log(`- ${att}`));

        });
}

eventTrucker(
    [
        "Concert -> John,Mary,Anna",
        "Conference -> Mike,John",
        "Concert -> Anna,George",
        "Meetup -> Anna"
    ]
      
)
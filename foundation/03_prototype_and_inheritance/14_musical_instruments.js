class Instrument {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    play() {
        console.log(`${this.name} is playing...`)
    }
    tune() {
        console.log(`sound of nice tune...`)
    }
}

class StringInstrument extends Instrument {
    constructor(name, type, numberOfStrings) {
        super(name, type);
        this.numberOfStrings = numberOfStrings;
    }

     tune() {
        console.log(`sound of nice string tune...`)
    }
}

class PercussionInstrument extends Instrument {
    constructor(name, type, drumSize) {
        super(name, type);
        this.drumSize = drumSize;
    }

     tune() {
        console.log(`sound of loud drum sound...`)
    }
}
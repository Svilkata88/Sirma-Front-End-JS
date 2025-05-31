function person(firstName, lastName) {
    let _firstName = firstName;
    let _lastName = lastName;

    return {
        get firstName() {
            return _firstName;
        },
        set firstName(value) {
            _first_name = value;
        },

        get lastName() {
            return _lastName;
        },
        set lastName(value) {
            _lastName = value;
        },

        get fullName() {
            return `${_firstName} ${_lastName}`;
        },
        set fullName(value) {
            const parts = value.trim().split(' ');
            if (parts.length >= 2) {
                _firstName = parts[0];
                _lastName = parts.slice(1).join(' ');
            }
        }
    }
}


const p1 = person('Peter', 'Ivanov');
console.log(p1.fullName)
p1.fullName = 'Svilen Ivanov';
console.log(p1.fullName)
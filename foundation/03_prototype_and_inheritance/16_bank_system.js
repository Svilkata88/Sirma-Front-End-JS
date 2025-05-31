class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this._balance = balance;
    }

    set balance(value) {
        if (value < 0) {
            this._balance = 0;
        } 
        else {
            this._balance = value;
        }
    }

    getBalance() {
        return this._balance;
    }

    withdraw(amount) {
        if (amount >= this._balance) {
            this._balance = 0;
        }
        else {
            this._balance -= amount;
        }
    }

    deposit(amount) {
        this._balance += amount;
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    applyInterest() {
        this._balance = this._balance * (this.interestRate / 100) + this._balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount >= this._balance + this.overdraftLimit) {
            this._balance = 0;
            this.overdraftLimit = 0;
        }
        else {
            if ( amount > this._balance) {
                this.overdraftLimit -= amount - this._balance;
                this._balance = 0;
            }
            else {
                this._balance -= amount;
            }
        }
    }
}



// let acc = new BankAccount(123456, 100);
// console.log(acc.getBalance());
// acc.deposit(100);
// console.log(acc.getBalance());


let acc = new CheckingAccount(123456, 100, 200);
console.log(acc.getBalance());
acc.deposit(100);
acc.withdraw(300);
acc.withdraw(100);
console.log(acc.getBalance());
console.log(acc.overdraftLimit);
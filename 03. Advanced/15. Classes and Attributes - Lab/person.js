class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    toString () {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
    
}

function arrayOfPersons() {

    let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let person2 = new Person('SoftUni');
    let person3 = new Person('Stephan', 'Johnson', 25);
    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    
    let personsArray = [];
    personsArray.push(person1)
    personsArray.push(person2)
    personsArray.push(person3)
    personsArray.push(person4)

    return console.log(personsArray[1]);
}

arrayOfPersons();

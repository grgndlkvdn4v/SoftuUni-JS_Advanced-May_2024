// нямам си ни най малка представа какво се иска в тая тъпа задача.
// Дори Chat GPT не успява да я реши

class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

function getPersons() {
  return [
    new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
    new Person('SoftUni'), // Only the firstName is provided
    new Person('Stephan', 'Johnson', 25), // No email provided
    new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'),
  ];
}

// Test the function
let persons = getPersons();
persons.forEach(person => console.log(person.toString()));

function createPerson(firstName, lastName) {
  
  let nameObj = {
    firstName,
    lastName, 

    get fullName() {
      return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
      let [firstName, lastName] = value.split(' ')
      this.firstName = firstName,
      this.lastName = lastName
    }
  }

  return nameObj
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov

person.firstName = "George";
console.log(person.fullName); //George Ivanov

person.lastName = "Peterson";
console.log(person.fullName); //George Peterson

person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla


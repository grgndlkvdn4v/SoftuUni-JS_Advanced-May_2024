function personAndTeacher() {

  class Person {
    constructor(name, email) {
      this.name = name,
      this.email = email
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject
    }
  }

  return {
    Person,
    Teacher
  }

// let hui = new Person('Mario', 'super.mario@randstad.com')
// console.log(hui);
// let secondHui = new Teacher('Georgi', 'georgi.donchev@randstad.com', 'baihui')
// console.log(secondHui);
}


personAndTeacher()
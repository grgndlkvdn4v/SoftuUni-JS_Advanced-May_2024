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

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course
    }
  }

  Person.prototype.toString = function() {
    let output = `${this.constructor.name} (`;
    for (const element of Object.getOwnPropertyNames(this)) {
      output += `${element}: ${this[element]}, `
    }

    output = output.slice(0, -2);
    output += ')';
    return output
  }

  extendPrototype(Person)
  function extendPrototype(classToExtend) {
    classToExtend.prototype.species = 'Human'
    classToExtend.prototype.toSpeciesString = function() {
      return`I am a ${this.species}. ${this.toString()}`
    }
  }

  // let p = new Person("Pesho","email@hit.bg");
  // console.log(p.species);
  // console.log(p.toSpeciesString());

    let s = new Student("Pesho","email@hit.bg");
    console.log(s.species);
    console.log(s.toSpeciesString());
  

  return {
    Person,
    Teacher,
    Student
  }
}


personAndTeacher()
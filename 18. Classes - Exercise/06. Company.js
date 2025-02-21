class Company {
  constructor() {
    this.departmentsObj = {}
  }

  addEmployee(name, salary, position, department) {
    let output = '';
    if (!name || salary < 0 || !position || !department) {
      throw new Error ('Invalid input!')
    }

    let employee = {name, salary, position, department}

    if (!this.departmentsObj.hasOwnProperty(employee.department)) {
      this.departmentsObj[employee.department] = [];
    }

    this.departmentsObj[employee.department].push(employee)
    output = `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
    return output;
  }


  bestDepartment() {
    let bestDepartment = '';
    let bestDepAvgSalary = 0;

    for (const department in this.departmentsObj) {
      // console.log(department);
      let salarySum = 0;
      let counter = 0;
      for (const employee of this.departmentsObj[department]) {
        // console.log(employee);
        salarySum += employee.salary;
        counter++;
      }
      let avagareSalary = salarySum / counter
      this.departmentsObj[department].averageSalary = avagareSalary

      if (this.departmentsObj[department].averageSalary > bestDepAvgSalary) {
        bestDepAvgSalary = this.departmentsObj[department].averageSalary;
        bestDepartment = department
      }

    }

    console.log(`Best Department is: ${bestDepartment}`);
    console.log(`Average salary: ${bestDepAvgSalary}`);

    let bestDepArr = this.departmentsObj[bestDepartment];
    bestDepArr.sort((a, b) => {
      if (b.salary !== a.salary) {
        return b.salary - a.salary
      }
      return a.name.localeCompare(b.name)
    })

    let output = '';
    for (const employee of bestDepArr) {
      output += `${employee.name} ${employee.salary.toFixed(2)} ${employee.position} ` ;
      output += '\n'
    }
    
    return output
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
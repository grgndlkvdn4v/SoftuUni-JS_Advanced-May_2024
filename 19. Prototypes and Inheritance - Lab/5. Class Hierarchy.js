function classHierarchy() {
  class Figure {
    constructor(unit) {
      this.m = Number(unit) / 100,
      this.cm = Number(unit),
      this.mm = Number(unit) * 10
      this.defaultValue = 'cm'
    }

    get area() {
      return 'ToDo area'
    }

    toString() {
      return `Figures units: ${this.defaultValue}`
    }

    changeUnits(unit) {
      switch (unit) {
        case "mm":
          
          break;
        
        case 'cm': 

          break;

        case 'm': 

          break;

      }
      this.defaultValue
    }
  }
  
  
  let f = new Figure(5);
  console.log(f[f.defaultValue]);
  console.log(f.m);
  console.log(f.mm);
  console.log(f.area);
  console.log(f.toString());
  
  
  
  return f

}
console.log(classHierarchy())
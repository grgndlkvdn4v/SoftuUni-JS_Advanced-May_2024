class JobOffers  {
  constructor(employer, position) {
    this.employer = employer,
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    for (const candidate of candidates) {
      let [name, education, yearsExperience] = candidate.split('-');
      yearsExperience = Number(yearsExperience);

      let obj = {
        name, 
        education, 
        yearsExperience
      }

      let exists = this.jobCandidates.find(obj => obj.name === name);

      if (!exists) {  // present
        this.jobCandidates.push(obj)

      } else {  // not present
        if (yearsExperience > exists.yearsExperience) {
          exists.yearsExperience = yearsExperience
        }
      }

    }

    let output = `You successfully added candidates: `
    this.jobCandidates.forEach(obj => {
      output += `${obj.name}, `
    });
    output = output.slice(0, -2) + '.';

    return output
  }

  jobOffer(chosenPerson) {
    let [name, minimalExperience] = chosenPerson.split('-');
    minimalExperience = Number(minimalExperience);

    let personPresent = this.jobCandidates.find((obj) => obj.name === name);
    
    if (!personPresent) {
      throw new Error( `${name} is not in the candidates list!` );
    }

    if (minimalExperience > personPresent.yearsExperience) {
      throw new Error( `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.` );
    } else {
      personPresent.yearsExperience = 'hired'
    }

    return `Welcome aboard, our newest employee is ${name}.`
  }
  
  salaryBonus(name) {
    let personPresent = this.jobCandidates.find((obj) => obj.name === name);
    
    if (!personPresent) {
      throw new Error( `${name} is not in the candidates list!` );
    }
    
    let message = ``;
    switch (personPresent.education) {
      case 'Bachelor':
        message = `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
      break;

      case 'Master':
        message = `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
      break;

      default:
        message = `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
      break;
    }

    return message
  }

  candidatesDatabase() {
    if (!this.jobCandidates.length) {
      return 'Candidate Database is empty!'
    }

    let message = `Candidates list:\n`;

    this.jobCandidates
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(candidate => {
        message += `${candidate.name}-${candidate.yearsExperience}\n`
      });

    return message.trim()
  }
}


let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
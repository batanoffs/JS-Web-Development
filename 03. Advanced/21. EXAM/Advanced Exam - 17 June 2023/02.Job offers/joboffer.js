class JobOffers {
    jobCandidates = [];

    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
    }

    jobApplication(candidates) {
        canditates.map ( p => {

            let [name, edication, yearsExperience] = p.split("-")
            
            let candidate = this.jobCandidates.find(p => p.name === name);

            if(candidate) {
                if(candidate.yearsExperience < yearsExperience) {
                    candidate.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({name, edication, yearsExperience});
            }
        });

        let result = [];
        this.jobCandidates.map( p => {
            result.push(`${p.name}`)
        });
        return `You successfully added candidates: ${result.join(', ')}.`
        
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split("-");
        const isFound = this.jobCandidates.findIndex(person => person.name.toLowerCase() === name.toLowerCase());
        
        if(isFound === -1) {
            throw new Error (`${name} is not in the candidates list!`);
        } else {
            const currentExperience = Number(this.jobCandidates[isFound].yearsExperience);
            if(currentExperience < Number(minimalExperience)) {
                this.jobCandidates[isFound].yearsExperience = "hired";
                return `Welcome aboard, our newest employee is ${name}.`
            } else {
                throw new Error (`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            }
        }
    }

    salaryBonus(name) {
        const isFound = this.jobCandidates.findIndex(person => person.name.toLowerCase() === name.toLowerCase());
        
        if(isFound === -1) {
            throw new Error (`${name} is not in the candidates list!`);
        } 

        const degree = this.jobCandidates[isFound].edication;

        switch (degree) {
            case "Bachelor":
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
                
            case "Master":
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
            default:
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`

        }
    }

    candidatesDatabase(){
        if ( this.jobCandidates.length === 0 ) {
            return "Candidate Database is empty!"
        } else {
            
            let buffer = [];
            for (const person of this.jobCandidates) {
                buffer.push(`${person.name}-${person.yearsExperience}`);
            }

            let sorted = buffer.sort((a, b) => a.localeCompare(b));
            sorted = sorted.join("\n")
            return "Candidates list:" + "\n" + sorted.trimEnd();
        }
    }
}



let Jobs = new JobOffers("Google", "Strategy Analyst");

console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));

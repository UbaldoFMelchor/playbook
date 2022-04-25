class repo {
    constructor(name,autor,language,numbersOfCommits,stars,forks,issues_open,issues_closed) {
        this.name = name
        this.autor = autor
        this.language =language
        this.numbersOfCommits = numbersOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_closed =issues_closed
        
    }

    getTotalIssues() {
        return `${this.issues_open} +  ${this.issues_closed}`
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const myRepo = new repo("Launch X","Carlo Gilmar","JavaScript",100,199,299,10,10)

console.log("Nombre del repo:" + myRepo.name)
console.log("Issues totales: " + myRepo.getTotalIssues())
console.log(myRepo.getGeneralInfo())
   

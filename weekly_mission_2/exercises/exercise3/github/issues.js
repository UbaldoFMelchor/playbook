class issue {
    constructor(title,repositoryNameAssociated,status,NumberOfCommits,
        labels,autor,dateCreated,lastUpdate) {
            this.title = title
            this.repositoryNameAssociated = repositoryNameAssociated
            this.status = status
            this.NumberOfCommits = NumberOfCommits
            this.labels = labels
            this.autor = autor
            this.dateCreated = dateCreated
            this.lastUpdate = lastUpdate
        }
    getStatus() {
        return this.status
    }
    getTitleAndAutor() {
        return `This issue ${this.title} was created by ${this.autor}`
    }
}

const myIssue = new issue ("Live 2 Semana 2","MissionNODEJS","Open",53,
3,"CarloGilmar","12 de abril 2022","21 de abril 2022",)

console.log("Issue Name: " + myIssue.title)
console.log("Issue status: " + myIssue.getStatus())
console.log(myIssue.getTitleAndAutor())
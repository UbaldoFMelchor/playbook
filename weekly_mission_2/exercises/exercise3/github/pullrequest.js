class pullrequest {
    constructor(title,branchName,dateCreated,status,autor,repositoryNameAssociated) {
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.autor = autor
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    getStatus() {
        return this.status
    }
    getTitleAndAutor() {
        return `this pull request ${this.title} was created by ${this.autor} `
    }
}

const myPullrequest = new pullrequest("Mi Primer PR", "main","12 de Abril de 2022","open",
"UbaldoFMelchor","Launch-x-explorers")

console.log("Nombre del PR: " + myPullrequest.title)
console.log("status: " + myPullrequest.getStatus())
console.log(myPullrequest.getTitleAndAutor())
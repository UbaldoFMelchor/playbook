const pullrequest ={
    title: "Mi primer PR",
    branchName: "main",
    dateCreated: "12 de Abril 2022",
    status: "Open",
    autor: "UbaldoFMelchor",
    repositoryNameAssociated: "launch-x-explorers",
    getStatus: function(){
        return this.status
    },
    getTitleAndAutor: function(){
        return `this pull request ${this.title} was created by ${this.autor} `
    }
}
console.log("Nombre del PR: " + pullrequest.title)
console.log("status: " + pullrequest.getStatus())
console.log(pullrequest.getTitleAndAutor())
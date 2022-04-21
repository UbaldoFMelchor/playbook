const Issue = {
    title: "Live 2 Semana 2",
    repositoryNameAssociated: "MissionNODEJS",
    status: "Open",
    NumberOfComments: 53,
    labels: 3,
    autor: "CarloGilmar",
    dateCreate: "12 de abril 2022",
    lastUpdate: "21 de abril 2022",
    getStatus: function(){
        return this.status
    },
    getTitleAndAutor: function(){
        return `This issue ${this.title} was created by ${this.autor}`
    }
}
console.log("Issue Name: " + Issue.title)
console.log("Issue status: " + Issue.getStatus())
console.log(Issue.getTitleAndAutor())
class biography {
    constructor(name,friends,presentation,location,createDate,hoobys,pictures,post) {
    this.name = name
    this.friends = friends
    this.presentation = presentation
    this.location = location
    this.createDate = createDate
    this.hoobys = hoobys
    this.pictures = pictures
    this.post = post
    }

}

const myBiography = new biography("Ubaldo F Melchor",214,
"It takes a little darkness to enjoy the light...","xalapa","may 2010",4,512,3501)

console.log(myBiography)
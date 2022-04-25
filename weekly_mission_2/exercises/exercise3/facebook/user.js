class user {
    constructor(name,mail,url,picture) {
        this.name = name
        this.mail = mail
        this.url = url
        this.picture = picture
    }
}

const myuser = new user("Ubaldo F","ubaldofmelchor97@hotmail.com",
"https://www.facebook.com/ubxido/","imgprofile")

console.log(myuser)
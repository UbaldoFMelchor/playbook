class user {
    constructor(user,username,bio,location,age) {
        this.user = user
        this.username = username
        this.bio = bio
        this.location = location
        this.age = age
    }
    getUser() {
        return this.user
    }
    getUsername() {
        return this.username

    }
}

const myUser = new user("UbaldoFMelchor","@ubxidonitroso","It takes a little darkness to enjoy the light...",
"Xalapa,Ver;Mexico",24)

console.log("twitter user: " + myUser.getUser() + " " + myUser.getUsername())
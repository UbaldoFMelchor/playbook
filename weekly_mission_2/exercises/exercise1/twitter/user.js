const user = {
    user: "UbaldoFMelchor",
    userName: "@ubxidonitroso",
    bio: "It takes a little darkness to enjoy the light...",
    location: "Xalapa,Ver;Mexico",
    age: 24,
    getUser: function() {
        return this.user
    },
    getUsername: function() {
        return this.userName

    }
}

console.log("twitter user: " + user.getUser() + " " + user.getUsername())
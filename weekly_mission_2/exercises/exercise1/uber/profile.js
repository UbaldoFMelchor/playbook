const profile = {
    name: "carlos",
    trips: 1523,
    rating: 4.83,
    years: 1,
    bio: "hello world",
    location: "mexico",
    fun_fact:"lorem ipsum",
    favorite_story:"toystory1",
    getDriverinfo: function () {
        return `DriverName: ${this.name}
         location: ${this.location}
         trips: ${this.trips} 
         rating: ${this.rating} `
    },
}
console.log(profile.getDriverinfo())
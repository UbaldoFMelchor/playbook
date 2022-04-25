class profile {
    constructor(name,trips,rating,years,bio,location,fun_fact,favorite_story) {
        this.name = name
        this.trips = trips
        this.rating = rating
        this.years = years
        this.bio = bio
        this.location = location
        this.fun_fact = fun_fact
        this.favorite_story = favorite_story
    }
}

const myprofile = new profile("carlos",1523,4.83,1,"hello world","mexico","lorem ipsum","toystory1")

console.log(myprofile)
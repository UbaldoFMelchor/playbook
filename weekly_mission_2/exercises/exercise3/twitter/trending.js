class trending {
    constructor(for_u, trending_mexico, COVID19, news, sports, entretaiment) {
        this.for_u = for_u
        this.trending_mexico = trending_mexico
        this.COVID19 = COVID19
        this.news = news
        this.sports = sports
        this.entretaiment = entretaiment
    }
    getTrendingTopicInfo() {
        return this.trending_mexico
    }
}

const newTrending = new trending("for_u1","trending_mexico1","COVID19-1","news1","sports1","movie1")

console.log("trending topics: " + newTrending.getTrendingTopicInfo())
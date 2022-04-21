const trending = {
    for_user: ["trending1", "trending2", "trending3"],
    trending_location: ["trending1", "trending2", "trending3"],
    covid19: ["trending1", "trending2", "trending3"],
    news:["trending1", "trending2", "trending3"],
    sports: ["trending1", "trending2", "trending3"],
    entretainment: ["trending1", "trending2", "trending3"],
    getTrendingTopicInfo: function() {
        return this.trending_location
    }
}

console.log("trending topics: " + trending.getTrendingTopicInfo())
const hashtag = {
    top: ["top1", "top2", "top3"],
    lasted: ["trending1", "trending2", "trending3"],
    people: ["people1", "people2", "people3"],
    photos: ["picture1", "picture2", "picture3"],
    videos: ["video1", "video2", "video3"],
    getTopAndLasted: function() {
        return `this is the top hashtags: ${this.top} and the lasted hashtags: ${this.lasted}`
    }
}
console.log(hashtag.getTopAndLasted())
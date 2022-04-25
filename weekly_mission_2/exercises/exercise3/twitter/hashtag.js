class hashtag {
    constructor(top,lasted,people,photos,videos) {
        this.top = top
        this.lasted = lasted
        this.people = people
        this.photos = photos
        this.videos = videos
    }
    getTopAndLasted() {
        return `this is the top hashtags: ${this.top} and the lasted hashtags: ${this.lasted}`
    }
}

const NewHashtag = new hashtag("top1","lasted1","people1","photos1","videos1")

console.log(NewHashtag.getTopAndLasted())
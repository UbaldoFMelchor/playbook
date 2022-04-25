class post {
    constructor(numberPost,pictures,videos,visits,books,games) {
    this.numberPost = numberPost
    this.pictures = pictures
    this.videos = videos
    this.visits = visits
    this.books = books
    this.games = games
    }
}

const mypost = new post(3501,512,965,213,15,5)

console.log(mypost)
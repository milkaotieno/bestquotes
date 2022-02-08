export class Bestquotes {
    constructor (public quote: string, public author: string, public date: Date,public createdBy: string, public upvotes: number = 0, public downvotes: number = 0) {
        // this.quote = quote;
        // this.author = author;
        // this.date = date;
        // this.createdBy = createdBy;
        // this.upvotes = upvotes;
        // this.downvotes = downvotes;
    }
    public popular: boolean = false;
    
}

//quote, author, date
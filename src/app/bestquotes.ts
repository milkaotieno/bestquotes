export class Bestquotes {

    public popular: boolean = false;
    constructor (public quote: string, public author: string, public date: Date,public createdBy: string, public upvotes: number = 0, public downvotes: number = 0) {
        // this.quote = quote;
        // this.author = author;
        // this.date = date;
        // this.createdBy = createdBy;
        // this.upvotes = upvotes;
        // this.downvotes = downvotes;
        {
            this.popular = false;
        }
    }
    //public popular: boolean = false;
    public showDescription:boolean= false;
    
}



//quote, author, date
// map(arg0: (Bestquotes: any) => any) {
//     throw new Error('Method not implemented.');
//   }
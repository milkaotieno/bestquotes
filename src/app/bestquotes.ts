export class Bestquotes {
    map(arg0: (Bestquotes: any) => any) {
      throw new Error('Method not implemented.');
    }
    constructor (public quote: string, public author: string, public date: Date,public createdBy: string, public upvotes: number = 0, public downvotes: number = 0) {
        // this.quote = quote;
        // this.author = author;
        // this.date = date;
        // this.createdBy = createdBy;
        // this.upvotes = upvotes;
        // this.downvotes = downvotes;
    }
    public popular: boolean = false;
    public showDescription:boolean= false;
    
}
export class Quote {
    showDescription:boolean;
    constructor(public id:number, public name:string, public quotetitle:string, public quoteBody:string, public Author:string, public quoteDate:Date, public upCount:number, public downCount:number)
    {
        this.showDescription=false;
    }
}

//quote, author, date
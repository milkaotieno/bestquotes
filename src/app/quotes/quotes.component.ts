//import { Quote } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { Bestquotes } from '../bestquotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Bestquotes[] = [ 
    new Bestquotes("When something is free you are the product.", "Golden Management", new Date(2022,2,7),"Motieno",0,0),
    new Bestquotes("Peace begins with a smile.", "Mother Teresa", new Date(2022,2,7),"Motieno",0,0),
    new Bestquotes("When you don't have anything, then you have everything.", "Mother Teresa", new Date(2001,10,1), "Milka", 0, 0),
    new Bestquotes( "Read, read, read. Read everything trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and \
    studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.\"",
    "William Faulkner", new Date(2001,10,1), "Junior", 0, 0), 
    new Bestquotes("The only true wisdom is in knowing you know nothing.", "Author: Socrates", new Date(2017,9,8), "Motieno", 0, 0)
  ];
  
  addNewBestquotes(bestquotes:any){
    let goalLength = this.quotes.length;
    bestquotes.id = bestquotes.Length+1;
    bestquotes.Date = new Date(bestquotes.Date)
    this.quotes.push(bestquotes)
    alert('Thanks for your contribution')
   
  }
deleteQuote(toDelete:boolean, index:number){
  if(toDelete){
    let trashQuote = confirm(`Do you want to delete '${this.quotes[index].quote}' quote?`) 

    if(trashQuote){
     this.quotes.splice(index, 1)
    }
  }
}



  constructor() { }

  ngOnInit(): void {
  }

}

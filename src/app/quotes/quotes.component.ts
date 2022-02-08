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
    new Bestquotes("Peace begins with a smile", "Mother Teresa", new Date(20220207), "Milka", 0, 0),
    new Bestquotes("When you don't have anything, then you have everything.", "Mother Teresa", new Date(2001001), "Motieno", 0, 0),
    new Bestquotes("The only true wisdom is in knowing you know nothing.", "Socrates", new Date(20170908), "Milka", 0, 0)
  ];
addnewBestquotes(quote:any){

}

deleteQuote(toDelete:boolean, index:number){
  if(toDelete){
    let trashQuote = confirm(`Do you sure you want to delete '${this.quotes[index].quote}' quote?`) 

    if(trashQuote){
     this.quotes.splice(index, 1)
    }
  }
}



  constructor() { }

  ngOnInit(): void {
  }

}

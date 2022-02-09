import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Bestquotes } from '../bestquotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes!: Bestquotes;
  @Output() delete = new EventEmitter<boolean>() 
  Bestquotes: any;

  deleteQuote(todelete:boolean){
    this.delete.emit(todelete);
  }

  
  upCounter(){
    this.quotes.upvotes+=1;
  }

  downCounter(){
    this.quotes.downvotes+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

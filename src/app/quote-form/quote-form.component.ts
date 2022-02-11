import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bestquotes } from '../bestquotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  
  newBestquote = new Bestquotes("","", new Date(), "", 0, 0);
@Output() addBestquote = new EventEmitter<Bestquotes>();

  submitBestquote(quoteForm: NgForm){
this.addBestquote.emit(this.newBestquote);
// {
//   quoteForm.reset();
//   }

  }
  


  constructor() { }

  ngOnInit(): void {
  }

}

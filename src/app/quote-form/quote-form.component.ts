import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bestquotes } from '../bestquotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  
  newBestquote = new Bestquotes("","", new Date(), " ", 0, 0);
@Output() addGoal = new EventEmitter<Bestquotes>();

  submitGoal(){
this.addGoal.emit(this.newBestquote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
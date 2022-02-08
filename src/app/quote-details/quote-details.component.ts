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

  deleteQuote(todelete:boolean){
    this.delete.emit(todelete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

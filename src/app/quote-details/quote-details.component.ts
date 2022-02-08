import { Component, OnInit,Input } from '@angular/core';
import { Bestquotes } from '../bestquotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes!: Bestquotes;

  constructor() { }

  ngOnInit(): void {
  }

}

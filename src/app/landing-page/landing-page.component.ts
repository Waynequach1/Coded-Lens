import { Component } from '@angular/core';
import { Quote } from './models/quote.model';
import { quotes } from './data/quotes';

@Component({
  selector: 'coded-lens-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  public quotes: Quote[] = quotes;

}

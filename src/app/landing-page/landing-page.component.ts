import { Component } from '@angular/core';
import { Quote } from './models/quote.model';

@Component({
  selector: 'coded-lens-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  public quotes: Quote[] = [
    {
      quote: "It\'s an algorithm, they were told. It\'s very complex. This discouraged many from pressing further. Many people, unfortunately, are intimidated by math.",
      author: "Cathy O\'Neil"
    },
    {
      quote: "There would always be mistakes, however, because models are, by their very nature, simplifications. No model can include all of the real world’s complexity or the nuance of human communication.",
      author: "Cathy O\'Neil"
    }
  ]
}

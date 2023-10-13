import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { technologyExplanations, technologyGood, technologyImplication } from './data';
import { PossiblePageTypes } from './models';

@Component({
  selector: 'coded-lens-generic-discover',
  templateUrl: './generic-discover.component.html',
  styleUrls: ['./generic-discover.component.css']
})
export class GenericDiscoverComponent {
  public technologies;
  public goodSeverity = 'success'
  public goodText = 'The Good'
  public badSeverity = 'danger'
  public badText = 'The Bad'
  private router: Router;

  constructor(router: Router) {
    this.router = router;  

    // Parse the router and retrieve the url type to assign generic data to.
    this.technologies = this.getTechnologyInformation(this.router.url.split('/')[2] as PossiblePageTypes);
    
  }

  // Inverts the button displays
  public handleOnHover(isGood: boolean) {
    if (isGood) {
      this.goodSeverity = 'danger';
      this.goodText = 'The Bad';
    } else {
      this.badSeverity = 'success';
      this.badText = 'The Good';
    }
  }

  // Reverts the inversion
  public handleOnLeave(isGood: boolean) {
    if (isGood) {
      this.goodSeverity = 'success';
      this.goodText = 'The Good';
    } else {
      this.badSeverity = 'danger';
      this.badText = 'The Bad';
    }
  }

  private getTechnologyInformation(url: PossiblePageTypes) {
    switch (url) {
      case "the_lens":
        return technologyExplanations;
      case "the_good":
        return technologyGood;
      case "the_implications":
        return technologyImplication;
      // Should never realistically default but added nonetheless
      default:
        return technologyExplanations;
    }
  }
}

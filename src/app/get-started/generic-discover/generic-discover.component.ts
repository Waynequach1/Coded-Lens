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
  public PossiblePageTypes = PossiblePageTypes;

  public technologies;
  public pageType;
  public pageDescription;

  public leftButtonSeverity!: string;
  public leftButtonText!: string;
  public rightButtonSeverity!: string;
  public rightButtonText!: string;
  
  private router: Router;

  constructor(router: Router) {
    this.router = router;  
    // Parse the router and retrieve the url type to assign generic data to.
    this.pageType = this.router.url.split('/')[2] as PossiblePageTypes

    this.technologies = this.getTechnologyInformation();
    this.setupButtonText();
    this.pageDescription = this.getPageDescription();
  }

  // Inverts the button displays
  public handleOnHover(isLeft: boolean) {
    if (isLeft) {
      this.leftButtonSeverity = 'danger';
      this.leftButtonText = 'The Bad';
    } else {
      this.rightButtonSeverity = 'success';
      this.rightButtonText = 'The Good';
    }
  }
  // Reverts the inversion
  public handleOnLeave(isLeft: boolean) {
    if (isLeft) {
      this.leftButtonSeverity = 'success';
      this.leftButtonText = 'The Good';
    } else {
      this.rightButtonSeverity = 'danger';
      this.rightButtonText = 'The Bad';
    }
  }

  public handleOnClick(isLeft: boolean) {
    if (isLeft && this.pageType !== PossiblePageTypes.the_lens) {
      this.router.navigateByUrl("/get_started/the_lens")
    }else if (isLeft) {
      this.router.navigateByUrl("/get_started/the_implications")
    } else {
      this.router.navigateByUrl("/get_started/the_good")
    }
  }

  private getPageDescription() {
    switch (this.pageType) {
      case "the_lens":
        return "Using the lens we can uncover biases in the following technologies";
      case "the_good":
        return "Seeing only the good in these technologies their benefits are as follows.";
      case "the_implications":
        return "But turning the lens reveals the faults in the technologies.";
      default:
        return "Using the lens we can uncover biases in the following technologies";
    }
  }

  private setupButtonText() {
    switch (this.pageType) {
      case "the_lens":
        this.leftButtonSeverity = 'danger';
        this.leftButtonText = 'The Bad';
        this.rightButtonSeverity = 'success';
        this.rightButtonText = 'The Good';
        break;
      case "the_good":
        this.leftButtonSeverity = 'Primary';
        this.leftButtonText = 'The Lens';
        this.rightButtonSeverity = 'danger';
        this.rightButtonText = 'The Bad';
        break;
      case "the_implications":
        this.leftButtonSeverity = 'Primary';
        this.leftButtonText = 'The Lens';
        this.rightButtonSeverity = 'success';
        this.rightButtonText = 'The Good';
        break;
      // Should never realistically default but added nonetheless
      default:
        this.leftButtonSeverity = 'danger';
        this.leftButtonText = 'The Bad';
        this.rightButtonSeverity = 'success';
        this.rightButtonText = 'The Good';
        break;
    }
  }

  private getTechnologyInformation() {
    switch (this.pageType) {
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

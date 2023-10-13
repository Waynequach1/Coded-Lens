import { Component } from '@angular/core';

@Component({
  selector: 'coded-lens-lens-at-work',
  templateUrl: './lens-at-work.component.html',
  styleUrls: ['./lens-at-work.component.css']
})
export class LensAtWorkComponent {
  public goodSeverity = 'success'
  public goodText = 'The Good'
  public badSeverity = 'danger'
  public badText = 'The Bad'

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
}

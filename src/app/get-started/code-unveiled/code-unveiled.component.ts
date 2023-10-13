import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'coded-lens-code-unveiled',
  templateUrl: './code-unveiled.component.html',
  styleUrls: ['./code-unveiled.component.css']
})
export class CodeUnveiledComponent {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public handleClick() {
    this.router.navigateByUrl("/get_started/the_lens");
  }
}

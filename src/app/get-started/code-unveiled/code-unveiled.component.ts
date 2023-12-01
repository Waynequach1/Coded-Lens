import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityWatcherService } from '../../services/activity-watcher/activity-watcher.service';

@Component({
  selector: 'coded-lens-code-unveiled',
  templateUrl: './code-unveiled.component.html',
  styleUrls: ['./code-unveiled.component.css']
})
export class CodeUnveiledComponent {
  private router: Router;
  private activityWatcherService: ActivityWatcherService;

  constructor(router: Router, activityWatcherService: ActivityWatcherService) {
    this.router = router;
    this.activityWatcherService = activityWatcherService;
    
    this.activityWatcherService.updateCodeData('the_code');
  }

  public handleClick() {
    this.router.navigateByUrl("/get_started/the_lens");
  }
}

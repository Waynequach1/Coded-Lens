import { Component } from '@angular/core';
import { ActivityWatcherService } from 'src/app/services/activity-watcher/activity-watcher.service';

@Component({
  selector: 'coded-lens-alexa',
  templateUrl: './alexa.component.html',
  styleUrls: ['./alexa.component.css']
})
export class AlexaComponent {
  public activityWatcherServicer: ActivityWatcherService;

  public constructor(activityWatcherService: ActivityWatcherService) {
    this.activityWatcherServicer = activityWatcherService;
  }

  
}

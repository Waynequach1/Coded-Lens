import { Component } from '@angular/core';
import { ActivityWatcherService } from '../../services/activity-watcher/activity-watcher.service';
import { Conversation, Speech } from './models';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ConversationData } from './data/conversation-data';

@Component({
  selector: 'coded-lens-alexa',
  templateUrl: './alexa.component.html',
  styleUrls: ['./alexa.component.css']
})
export class AlexaComponent {
  public activityWatcherServicer: ActivityWatcherService;
  public conservationLog: BehaviorSubject<Speech[]> = new BehaviorSubject<Speech[]>([]);
  public conversationOptions: BehaviorSubject<Conversation[]> = new BehaviorSubject<Conversation[]>([]);
  public currentPrompt: Observable<Conversation>;

  private fullConversationLogs = ConversationData;

  public constructor(activityWatcherService: ActivityWatcherService) {
    this.activityWatcherServicer = activityWatcherService;

    // Initialize current prompt data
    this.currentPrompt = of(this.fullConversationLogs[0]);

    this.addConversation({
        
      content: "Welcome to Alexa. What yould you like to know?",
      speakerIsHuman: false,
    });
  }

  public addConversation(speech: Speech) {
    this.conservationLog.next([
      ...this.conservationLog.value,
      speech
    ])
  }

  public handleClick(conversation: Conversation) {
    // do nothing cause idgaf
  }



  
}

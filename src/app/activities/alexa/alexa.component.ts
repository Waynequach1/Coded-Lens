import { Component } from '@angular/core';
import { ActivityWatcherService } from '../../services/activity-watcher/activity-watcher.service';
import { Conversation, ConversationInfo, Speech } from './models';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { ConversationData } from './data/conversation-data';

@Component({
  selector: 'coded-lens-alexa',
  templateUrl: './alexa.component.html',
  styleUrls: ['./alexa.component.css']
})
export class AlexaComponent {
  public activityWatcherService: ActivityWatcherService;
  public conservationLog: BehaviorSubject<Speech[]> = new BehaviorSubject<Speech[]>([]);
  public conversationOptions: BehaviorSubject<Conversation[]> = new BehaviorSubject<Conversation[]>([]);
  public currentPrompt: BehaviorSubject<Conversation>;
  public conversationInfo: BehaviorSubject<ConversationInfo>;

  private fullConversationLogs = ConversationData;

  public constructor(activityWatcherService: ActivityWatcherService) {
    this.activityWatcherService = activityWatcherService;

    // Initialize current prompt data
    this.currentPrompt = new BehaviorSubject<Conversation>(this.fullConversationLogs[0]);

    this.addConversation({
      content: "Welcome to Alexa. What would you like to know?",
      speakerIsHuman: false,
    });

    this.conversationInfo = new BehaviorSubject<ConversationInfo>(this.initializeConversationInfo());
  }

  ngOnInit() {
    this.resetPromptAnimation();
  }

  public addConversation(speech: Speech) {
    this.conservationLog.next([
      ...this.conservationLog.value,
      speech
    ])

  }

  public handleClick(conversation: Conversation) {
    this.resetPromptAnimation();
    this.updateDisplay(conversation);
    this.currentPrompt.next(conversation);
  }

  private initializeConversationInfo(): ConversationInfo {
    return ({
      information: this.activityWatcherService.initializeAlexaData(),
      textAnimate: true,
    })
  }

  // Resets the prompt animtion, uses document but i dont see other ways to make things fancy 
  private resetPromptAnimation() {
    const element = document.getElementById("prompt");

    if (element) {
      element.style.animation = 'none';
      element.offsetHeight; /* trigger reflow */
      element.style.animation = ""; 
    }
  }

  private updateDisplay(conversation: Conversation) {
    this.addConversation(this.createSpeech(conversation.prompt, true));
    conversation.response.map((response) => this.addConversation(this.createSpeech(response)));

  }

  private createSpeech(content: string, isHuman?: boolean): Speech {
    return {content, speakerIsHuman: isHuman ?? false};
  }
}

import { Component } from '@angular/core';
import { ActivityWatcherService } from '../../services/activity-watcher/activity-watcher.service';
import { Conversation, Speech } from './models';
import { BehaviorSubject, delay } from 'rxjs';
import { ConversationData } from './data/conversation-data';
import { AlexaInfo } from '../../services/activity-watcher/models';

@Component({
  selector: 'coded-lens-alexa',
  templateUrl: './alexa.component.html',
  styleUrls: ['./alexa.component.css']
})
export class AlexaComponent {
  public activityWatcherService: ActivityWatcherService;
  public conversationLog: BehaviorSubject<Speech[]> = new BehaviorSubject<Speech[]>([]);
  public conversationOptions: BehaviorSubject<Conversation[]> = new BehaviorSubject<Conversation[]>([]);
  public currentPrompt: BehaviorSubject<Conversation>;
  public alexaInfo: BehaviorSubject<AlexaInfo>;
  public textAnimate: boolean = false;
  public isAnimating: boolean = false;

  private fullConversationLogs = ConversationData;

  public constructor(activityWatcherService: ActivityWatcherService) {
    this.activityWatcherService = activityWatcherService;

    // Initialize current prompt data
    this.currentPrompt = new BehaviorSubject<Conversation>(this.fullConversationLogs[0]);
    this.resetAlexa();

    this.alexaInfo = new BehaviorSubject<AlexaInfo>(this.activityWatcherService.getAlexaData());
  }

  ngOnInit() {
    this.resetPromptAnimation();
  }

  public addConversation(speech: Speech) {
    this.conversationLog.next([
      ...this.conversationLog.value,
      speech
    ])

  }

  public selectPrompt(conversation: Conversation) {
    this.resetPromptAnimation();
    this.updateDisplay(conversation);
    this.currentPrompt.next(conversation);
  }

  public finishConversation(conversation: Conversation) {
    const alexaValue = this.alexaInfo.value;
    if (conversation?.finishId && (alexaValue.foundConversations.indexOf(conversation.finishId) == -1)) {
      let newAlexaValue = {...alexaValue,
        foundConversations: alexaValue.foundConversations.concat([conversation?.finishId]), 
      }

      if (conversation?.secretId && (alexaValue.foundSecrets.indexOf(conversation.secretId) == -1)) {
        newAlexaValue = {...newAlexaValue, foundSecrets: alexaValue.foundConversations.concat([conversation?.secretId])}
      }

      this.activityWatcherService.updateAlexaData(newAlexaValue);
      this.alexaInfo.next(this.activityWatcherService.getAlexaData());
    }

    this.resetAlexa();
  }

  public changeTextSpeed() {
    if (!this.isAnimating) {
      this.textAnimate = !this.textAnimate;
    }
  }

  // Resets the prompt animation, uses document but i dont see other ways to make things fancy 
  private resetPromptAnimation() {
    const element = document.getElementById("prompt");

    if (element) {
      element.style.animation = 'none';
      element.offsetHeight; /* trigger reflow */
      element.style.animation = ""; 
    }
  }

  // Delays message sending to simulate text chat
  private updateDisplay(conversation: Conversation) {
    this.isAnimating = true;
    let index = -1;

    const delayMessages = setInterval(() => {
      if (index  == -1) {
        this.addConversation(this.createSpeech(conversation.prompt, true));
      }else if(index == conversation.response.length) {
        clearInterval(delayMessages);
        
        // Give time for css animations to fully play out.
        setTimeout(() => this.isAnimating = false, 500);        
      } else {
        this.addConversation(this.createSpeech(conversation.response[index]));
      }
      index = index + 1;        
    }, this.textAnimate ? 800 : 100);

  }

  private createSpeech(content: string, isHuman?: boolean): Speech {
    return {content, speakerIsHuman: isHuman ?? false};
  }

  private resetAlexa() {
    this.conversationLog.next([]);
    this.conversationOptions.next([]);
    this.currentPrompt.next(this.fullConversationLogs[0])
    
    this.addConversation({
      content: "Welcome to Alexa. What would you like to know?",
      speakerIsHuman: false,
    });
  }
}

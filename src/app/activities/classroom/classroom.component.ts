import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WarningPrompt } from './warning-prompt/warning-prompt.component';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { classroomConversations } from './data/classroom-conversations';
import { ClassroomSpeech, ClassroomOutcome } from './models';
import { conversationOutcomes } from './data/conversation-outcomes';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'coded-lens-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
  providers: [DialogService, MessageService],
})
export class ClassroomComponent {
  public acceptedDisclaimer!: Observable<boolean>;
  public classroomConversations = classroomConversations;
  private classroomOutcomes: ClassroomOutcome[] = conversationOutcomes;
  public finished: number = 0;
  public selectedAnswer: string = "";
  public currentConversation: BehaviorSubject<ClassroomSpeech[]> = new BehaviorSubject<ClassroomSpeech[]>(classroomConversations[0]);
  public currentOutcome: BehaviorSubject<ClassroomOutcome> = new BehaviorSubject<ClassroomOutcome>(this.classroomOutcomes[0]);
  public value: number = 0;

  private router: Router;
  private dialogService: DialogService;
  private messageService: MessageService;

  constructor(dialogService: DialogService, router: Router, messageService: MessageService) {
    this.dialogService = dialogService;
    this.router = router;
    this.messageService = messageService;
  }

  ngOnInit() {
    this.acceptedDisclaimer = this.dialogService.open(WarningPrompt, {}).onClose.pipe(
      map((resp) => resp ?? false),
      tap((resp) => {
        // Declined the warning, redirect out of page.
        if (!resp) {
          this.router.navigateByUrl('/home');
        }
      }));

      setTimeout(() => this.fakeLoad(), 1000);
  }

  public submitAnswer() {
    if (this.selectedAnswer === this.currentOutcome.value.options[this.currentOutcome.value.correctOption]) {
      this.finished = this.finished + 1;

      if (this.finished < classroomConversations.length) {
        this.messageService.add({
          severity: "success",
          summary: "Correct Answer",
          detail: "Correct! Please read the following conversation and answer the following question."
        })

        this.currentConversation.next(classroomConversations[this.finished]);
        this.currentOutcome.next(this.classroomOutcomes[this.finished]);

        this.value = 0;
        this.fakeLoad();
      } else {
        this.finished = this.finished - 1;
        this.messageService.add({
          severity: "info",
          summary: "Correct Answer",
          detail: "Correct. You have finished this activity. Feel free to attempt other activities."
        })        
      }
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Incorrect Answer",
        detail: "Incorrect, please try again.",
      })
    }
  }

  private fakeLoad() {
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 8) + 1;
      if (this.value >= 100) {
          this.value = 100;
          clearInterval(interval);
      }
  }, 100);
  }
}

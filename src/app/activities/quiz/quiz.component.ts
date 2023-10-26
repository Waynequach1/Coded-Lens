import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

import { quizQuestions } from './data/quiz-questions';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'coded-lens-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [MessageService],
})
export class QuizComponent {
  public questions = quizQuestions;
  public questionGroup = new FormGroup({
    questionArray: new FormArray(this.questions.map((question) => new FormControl(question.question) as FormControl))
  })

  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  public checkAnswers() {
    // This won't work for when a question is equal to the answer since the default form control
    // value is the question. Also kind of complicated to do some simple checks...
    const correct = [...this.questionGroup.value.questionArray ?? []].reduce(
      (accum, response, index) => accum + 
      (this.questions[index].possible_answers.indexOf(response) === 
      this.questions[index].correct_response ? 1 : 0), 0);
      
      if (correct === this.questions.length) {
        this.messageService.add({
          severity: "success",
          summary: "Congratulations!",
          detail: `Great work! You scored a perfect ${correct} / ${this.questions.length} on the quiz. Feel free to explore other activities.`
        })
      } else {
        this.messageService.add({
          severity: "error",
          summary: "Try Again",
          detail: `You scored ${correct} / ${this.questions.length}. Try revisting the page contents if you need more help.`
        })
      }


  }
  
}

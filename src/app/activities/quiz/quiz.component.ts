import { Component } from '@angular/core';
import { quizQuestions } from './data/quiz-questions';

@Component({
  selector: 'coded-lens-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  public questions = quizQuestions;

  
}

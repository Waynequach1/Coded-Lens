import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreditsComponent } from './credits/credits.component';
import { CodeUnveiledComponent } from './get-started/code-unveiled/code-unveiled.component';
import { GenericDiscoverComponent } from './get-started/generic-discover/generic-discover.component';
import { AlexaComponent } from './activities/alexa/alexa.component';
import { ClassroomComponent } from './activities/classroom/classroom.component';
import { QuizComponent } from './activities/quiz/quiz.component';

const routes: Routes = [
  {path: 'credits', component: CreditsComponent, title: "Credits"},
  {path: 'get_started/the_code', component: CodeUnveiledComponent, title: "The Code"},
  {path: 'get_started/the_lens', component: GenericDiscoverComponent, title: "The Lens"},
  {path: 'get_started/the_implications', component: GenericDiscoverComponent, title: "The Implications"},
  {path: 'get_started/the_good', component: GenericDiscoverComponent, title: "The Good"},
  {path: 'activities/alexa_talk', component: AlexaComponent, title: "Alexa Talk"},
  {path: 'activities/classroom_talk', component: ClassroomComponent, title: "Classroom Discussion"},
  {path: 'activities/quiz', component: QuizComponent, title: "Quiz"},
  {path: 'credits', component: CreditsComponent, title: "Credits"},
  {path: '**', component: LandingPageComponent, title: "Coded Lens"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

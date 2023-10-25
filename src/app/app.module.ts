import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ListboxModule } from 'primeng/listbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreditsComponent } from './credits/credits.component';
import { CodeUnveiledComponent } from './get-started/code-unveiled/code-unveiled.component';
import { GenericDiscoverComponent } from './get-started/generic-discover/generic-discover.component';
import { FormatTitlePipe } from './get-started/generic-discover/pipes/format-title.pipe';
import { AlexaComponent } from './activities/alexa/alexa.component';
import { ClassroomComponent } from './activities/classroom/classroom.component';
import { WarningPrompt } from './activities/classroom/warning-prompt/warning-prompt.component';
import { QuizComponent } from './activities/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    CreditsComponent,
    CodeUnveiledComponent,
    GenericDiscoverComponent,
    FormatTitlePipe,
    AlexaComponent,
    ClassroomComponent,
    WarningPrompt,
    QuizComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    DividerModule,
    BrowserAnimationsModule,
    TooltipModule,
    InputTextModule,
    ToggleButtonModule,
    DynamicDialogModule,
    ToastModule,    
    ProgressBarModule,
    ListboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

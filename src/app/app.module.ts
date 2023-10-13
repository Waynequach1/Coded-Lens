import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'primeng/carousel';
import {ButtonModule} from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    CreditsComponent
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
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

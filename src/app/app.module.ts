import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'primeng/carousel';
import {ButtonModule} from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreditsComponent } from './credits/credits.component';
import { CodeUnveiledComponent } from './get-started/code-unveiled/code-unveiled.component';
import { GenericDiscoverComponent } from './get-started/generic-discover/generic-discover.component';
import { FormatTitlePipe } from './get-started/generic-discover/pipes/format-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    CreditsComponent,
    CodeUnveiledComponent,
    GenericDiscoverComponent,
    FormatTitlePipe,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

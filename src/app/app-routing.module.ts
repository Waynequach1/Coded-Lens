import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreditsComponent } from './credits/credits.component';
import { CodeUnveiledComponent } from './get-started/code-unveiled/code-unveiled.component';
import { LensAtWorkComponent } from './get-started/lens-at-work/lens-at-work.component';
import { ImplicationsComponent } from './get-started/implications/implications.component';
import { GoodComponent } from './get-started/good/good.component';

const routes: Routes = [
  {path: 'credits', component: CreditsComponent, title: "Credits"},
  {path: 'get_started/the_code', component: CodeUnveiledComponent, title: "The Code"},
  {path: 'get_started/the_lens', component: LensAtWorkComponent, title: "The Lens"},
  {path: 'get_started/the_implications', component: ImplicationsComponent, title: "The Implications"},
  {path: 'get_started/the_good', component: GoodComponent, title: "The Good"},
  {path: 'credits', component: CreditsComponent, title: "Credits"},
  {path: 'credits', component: CreditsComponent, title: "Credits"},
  {path: '**', component: LandingPageComponent, title: "Coded Lens"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

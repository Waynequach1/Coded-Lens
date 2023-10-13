import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  {path: 'credits', component: CreditsComponent, title: "Credits"},
  {path: '**', component: LandingPageComponent, title: "Coded Lens"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

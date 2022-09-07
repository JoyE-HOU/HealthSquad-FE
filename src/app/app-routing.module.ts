import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageLoginComponent } from './landing-page-login/landing-page-login.component';
import { LandingPageSignupComponent } from './landing-page-signup/landing-page-signup.component';

const routes: Routes = [
  {path: 'landing-page-component', component: LandingPageComponent },
  {path: 'landing-page-login-component', component: LandingPageLoginComponent },
  {path: 'landing-page-signup-component', component: LandingPageSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPrescriptionContainerComponent } from './user-prescription-container/user-prescription-container.component';
import { UserRefillContainerComponent } from './user-refill-container/user-refill-container.component';
import { UserReminderContainerComponent } from './user-reminder-container/user-reminder-container.component';
import { LandingPageSignupComponent } from './landing-page-signup/landing-page-signup.component';
import { LandingPageLoginComponent } from './landing-page-login/landing-page-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserProfileComponent,
    UserPrescriptionContainerComponent,
    UserRefillContainerComponent,
    UserReminderContainerComponent,
    LandingPageSignupComponent,
    LandingPageLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

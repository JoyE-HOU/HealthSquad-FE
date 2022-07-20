import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPrescriptionContainerComponent } from './user-prescription-container/user-prescription-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserProfileComponent,
    UserPrescriptionContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

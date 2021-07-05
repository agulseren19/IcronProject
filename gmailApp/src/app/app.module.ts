import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule,FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faEnvelope, fas,faBars,faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { EmailComponent } from './email/email.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);

  }

 }

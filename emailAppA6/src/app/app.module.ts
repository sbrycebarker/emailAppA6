import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailformComponent } from './emailform/emailform.component';

import { MailService } from './services/mail.service';
import { HttpreqService } from './services/httpreq.service';

import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    EmailformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ MailService, HttpreqService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mail.service';
import { HttpreqService } from '../services/httpreq.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrls: ['./emailform.component.css']
})
export class EmailformComponent implements OnInit {
  title: string;
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
  constructor(
    private mailService: MailService,
    private FlashMessagesService: FlashMessagesService,
    private HttpreqService: HttpreqService
  ) { }

  ngOnInit() {
  }

  onFormSubmit() {
    const form = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      subject: this.subject,
      message: this.message
    }

    if(!this.mailService.validateForm(form)) {
      this.FlashMessagesService.show('Please fill all fields!', {cssClass: 'alert-danger', timeout: 3000})
      return  false
    }

    if(!this.mailService.validateEmail(form.email)) {
      this.FlashMessagesService.show('Please use valid email!', {cssClass: 'alert-danger', timeout: 3000})
      return false
    }

    this.HttpreqService.sendEmail(form).subscribe(data => {
      console.log(data)
      if (data) {
        console.log("please wait")        
      } else {
        if (data) {
          this.FlashMessagesService.show('EMAIL SENT!', {cssClass: 'alert-success', timeout: 3000})
        } else {
          this.FlashMessagesService.show('Try Again', {cssClass: 'alert-danger', timeout: 3000})
        }
      }
    })

  }
}

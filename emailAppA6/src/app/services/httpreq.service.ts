import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HttpreqService {
  message: any;

  constructor(private http: HttpClient) { }
  sendEmail(message) {
    console.log(message)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post('http://locahost:3000/sendmail', message, httpOptions)
  }
}

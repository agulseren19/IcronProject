import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Email } from 'Email';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) {
    this.getEmails();
   }

getEmails():Observable<Email[]>{
  return this.http.get<Email[]>('http://localhost:4200/api/email');

}
getEmailsId(id:number):Observable<Email[]>{
  return this.http.get<Email[]>('http://localhost:4200/api/email'+'/'+id+'/sent');

}
}

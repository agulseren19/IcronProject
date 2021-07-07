import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs'
import { MailUser } from 'MailUser';
import { BehaviorSubject } from 'rxjs';
import { Email } from 'Email';
import {UserComponent} from './user/user.component'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private messageSource=new BehaviorSubject<string>("default");
  currentMessage=this.messageSource.asObservable();
  private messageSourceClick=new BehaviorSubject<string>("0");
  currentMessageClick=this.messageSourceClick.asObservable();
  constructor(private http:HttpClient) {
    this.getUsers();
    this.getUsersId(0);
   }
getUsers():Observable<MailUser[]>{
  return this.http.get<MailUser[]>('http://localhost:4200/api/user');
}
getUsersId(id:number):Observable<MailUser>{
  return this.http.get<MailUser>('http://localhost:4200/api/user'+'/'+id);
}
changeMessage(message:string){
  this.messageSource.next(message);
     }
changeMessageClick(message:string){
  this.messageSourceClick.next(message);
  }
}

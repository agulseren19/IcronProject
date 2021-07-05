import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs'
import { MailUser } from 'MailUser';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private messageSource=new BehaviorSubject<number>(0);
  currentMessage=this.messageSource.asObservable();
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
changeMessage(message:number){
  this.messageSource.next(message);
     }
}

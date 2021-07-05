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
  private messageSource=new BehaviorSubject<number>(0);
  currentMessage=this.messageSource.asObservable();
  private userFirstSource=new BehaviorSubject<string>("");
  currentUserFirst=this.userFirstSource.asObservable();
  private userSecondSource=new BehaviorSubject<string>("");
  currentUserSecond=this.userSecondSource.asObservable();
  private userThirdSource=new BehaviorSubject<string>("");
  currentUserThird=this.userThirdSource.asObservable();
  private userFourthSource=new BehaviorSubject<string>("");
  currentUserFourth=this.userFourthSource.asObservable();
  private userFifthSource=new BehaviorSubject<string>("");
  currentUserFifth=this.userFifthSource.asObservable();
  private userSixthSource=new BehaviorSubject<string>("");
  currentUserSixth=this.userSixthSource.asObservable();
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
changeFirstSourceMessage(message:string){
  this.userFirstSource.next(message);
      }
      changeSecondSourceMessage(message:string){
        this.userSecondSource.next(message);
            }
            changeThirdSourceMessage(message:string){
              this.userThirdSource.next(message);
                  }
                  changeFourthSourceMessage(message:string){
                    this.userFourthSource.next(message);
                        }
                        changeFifthSourceMessage(message:string){
                          this.userFifthSource.next(message);
                              }
                              changeSixthSourceMessage(message:string){
                                this.userSixthSource.next(message);
                                    }

}

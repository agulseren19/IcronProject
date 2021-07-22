import { Injectable } from '@angular/core';
import { MailUser } from 'MailUser';

@Injectable({
  providedIn: 'root'
})
export class UserToEmailService {
  userList:MailUser[]=[];
  constructor() {
    this.userList=this.userList;
   }
   setUserList(list:MailUser[]):MailUser[]{
    this.userList=list;
    return this.userList;
   }
   getUserList():MailUser[]{
    return this.userList;
   }
}

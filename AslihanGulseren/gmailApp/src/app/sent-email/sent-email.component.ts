import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from 'Email';
import { MailUser } from 'MailUser';
import { AppComponent } from '../app.component';
import { EmailService } from '../email.service';
import { UserService } from '../user.service';
import {UserComponent} from '../user/user.component'
import {UserToEmailService} from '../user-to-email.service'
@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css']
})
export class SentEmailComponent implements OnInit {
  message!:string;
  emailList:Email[]=[];
  emailNumber!:number;
  isClicked:string="0";



  constructor(private emailService:EmailService, private userService:UserService, private http:HttpClient,private userToEmailService:UserToEmailService){
      this.emailService=emailService;
      this.userService=userService;
      this.userToEmailService=userToEmailService;
  }

  ngOnInit(): void {
    this.getEmailList();
    this.emailList=this.emailListReturn();
    this.userService.currentMessage.subscribe((mes: string)=>{this.message=mes;});
    this.userService.currentMessageClick.subscribe((mess: string)=>{this.isClicked=mess;});
  }
  getEmailList():void{
       this.emailService.getEmails().subscribe(email=>{
        for(let n = 0; n < email.length; n++){
          var em=new Email();
          em=email[n];
          this.emailList.push(em);
       }});
  }
  emailListReturn():Email[]{
    return this.emailList;
  }
  getEmailListId(id:number):Email[]{
    if(!parseInt(this.isClicked)){
    }
    else{
    this.emailList=[];
    if(id==undefined||id==0){
        this.emailService.getEmails().subscribe(use=>{
          console.log(use);
          for(let n = 0; n < use.length; n++){
            var em=new Email();
            em=use[n];
            this.emailList.push(em);
         }});
    }
    else{
    this.emailService.getEmailsIdSent(id).subscribe(use=>{
      console.log(use);
      for(let n = 0; n < use.length; n++){
        var em=new Email();
        em=use[n];
        this.emailList.push(em);
     }});
    }}
     return this.emailList;
  }
  getUserFullName(id:number):string{
    var list=<MailUser[]>this.userToEmailService.getUserList();
    if(list[id-1]!=undefined){
      return list[id-1].name+' '+list[id-1].surname;
    }
    return '';
  }
  getUserNumber(name:string):number{
    var list=<MailUser[]>this.userToEmailService.getUserList();
    for(let n = 0; n < list.length; n++){
      if((list[n].name+' '+list[n].surname).localeCompare(name)==0){
        return n+1;
      }
  }
  return 0;
}
getDate(date:Date):string{
  return date.toLocaleString().split('T')[0];
}



}


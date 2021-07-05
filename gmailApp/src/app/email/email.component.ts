import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from 'Email';
import { AppComponent } from '../app.component';
import { EmailService } from '../email.service';
import { UserService } from '../user.service';
import {UserComponent} from '../user/user.component'
@Component({
  selector: 'appemail',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  message!:number;
  emailList:Email[]=[];
  emailNumber!:number;
  userFirst!:string;
  userSecond!:string;
  userThird!:string;
  userFourth!:string;
  userFifth!:string;
  userSixth!:string;



  constructor(private emailService:EmailService, private userService:UserService, private http:HttpClient){
      this.emailService=emailService;
      this.userService=userService;
  }

  ngOnInit(): void {
    this.getEmailList();
    this.emailList=this.emailListReturn();
    this.userService.currentMessage.subscribe((mes: number)=>{this.message=mes;});
    this.userService.currentUserFirst.subscribe((mes: string)=>{this.userFirst=mes;});
    this.userService.currentUserSecond.subscribe((mes: string)=>{this.userSecond=mes;});
    this.userService.currentUserThird.subscribe((mes: string)=>{this.userThird=mes;});
    this.userService.currentUserFourth.subscribe((mes: string)=>{this.userFourth=mes;});
    this.userService.currentUserFifth.subscribe((mes: string)=>{this.userFifth=mes;});
    this.userService.currentUserSixth.subscribe((mes: string)=>{this.userSixth=mes;});


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
    this.emailList=[];
    if(id==undefined){
        this.emailService.getEmails().subscribe(use=>{
          console.log(use);
          for(let n = 0; n < use.length; n++){
            var em=new Email();
            em=use[n];
            this.emailList.push(em);
         }});
    }
    else{
    this.emailService.getEmailsId(id).subscribe(use=>{
      console.log(use);
      for(let n = 0; n < use.length; n++){
        var em=new Email();
        em=use[n];
        this.emailList.push(em);
     }});
    }

     return this.emailList;
  }


}

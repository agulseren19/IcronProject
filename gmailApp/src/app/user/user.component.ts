import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MailUser } from 'MailUser';
import { UserService } from '../user.service';
import {AppComponent} from '../app.component';
import { EmailService } from '../email.service';
@Component({
  selector: 'appuser',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  message!:number;
  userFirst!:string;
  selectedUser!:MailUser;
  userList:MailUser[]=[];
  userSecond!:string;
  userThird!:string;
  userFourth!:string;
  userFifth!:string;
  userSixth!:string;

  userNumber!:number;
  constructor(private emailService:EmailService,private userService:UserService, private http:HttpClient){
      this.userService=userService;
      this.emailService=emailService;
  }

  ngOnInit(): void {
     this.getUserListId('');
     this.userService.currentMessage.subscribe((mes: number)=>{this.message=mes;});
     this.userService.currentUserFirst.subscribe((mes: string)=>{this.userFirst=mes;});
     this.userService.currentUserSecond.subscribe((mes: string)=>{this.userSecond=mes;});
     this.userService.currentUserThird.subscribe((mes: string)=>{this.userThird=mes;});
     this.userService.currentUserFourth.subscribe((mes: string)=>{this.userFourth=mes;});
     this.userService.currentUserFifth.subscribe((mes: string)=>{this.userFifth=mes;});
     this.userService.currentUserSixth.subscribe((mes: string)=>{this.userSixth=mes;});

     // this.userList=this.userListReturn();
  }
  /*
  getUserList():void{
    if((this.userNumber)==undefined){
      this.userService.getUsers().subscribe(use=>{
        console.log(use);
        for(let n = 0; n < use.length; n++){
          var em=new User();
          em=use[n];
          this.userList.push(em);
       }});
    }
  }
  */
  userListReturn():MailUser[]{
    return this.userList;
  }

  getUserListId(idString:string):MailUser[]{
    this.userList=[];
    if(idString.length==0){
        this.userService.getUsers().subscribe(use=>{
          for(let n = 0; n < use.length; n++){
            this.userService.changeFirstSourceMessage(use[0].name+' '+use[0].surname);
            this.userService.changeSecondSourceMessage(use[1].name+' '+use[1].surname);
            this.userService.changeThirdSourceMessage(use[2].name+' '+use[2].surname);
            this.userService.changeFourthSourceMessage(use[3].name+' '+use[3].surname);
            this.userService.changeFifthSourceMessage(use[4].name+' '+use[4].surname);
            this.userService.changeSixthSourceMessage(use[5].name+' '+use[5].surname);

            var em=new MailUser();
            em=use[n];
            this.userList.push(em);
         }});
    }
    else{
    var id:number;
    id=parseInt(idString);
    this.userService.getUsersId(id).subscribe(use=>{
    this.selectedUser=use;
    })
  }
   // console.log(this.userList);
   this.userService.changeMessage(this.userNumber);
    return this.userList;
  }

}

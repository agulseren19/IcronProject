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
selectedUser!:MailUser;
  userList:MailUser[]=[];
  userNumber!:number;
  constructor(private emailService:EmailService,private userService:UserService, private http:HttpClient){
      this.userService=userService;
      this.emailService=emailService;
  }

  ngOnInit(): void {
     this.getUserListId('');
     this.userService.currentMessage.subscribe((mes: number)=>{this.message=mes;});
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

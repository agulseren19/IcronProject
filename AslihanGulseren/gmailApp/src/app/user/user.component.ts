import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MailUser } from 'MailUser';
import { UserService } from '../user.service';
import {AppComponent} from '../app.component';
import { EmailService } from '../email.service';
import {UserToEmailService} from '../user-to-email.service'
@Component({
  selector: 'appuser',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList:MailUser[]=[];
  message!:string;
  isClicked:string="0";
  selectedUser!:MailUser;
  permanentList:MailUser[]=[];
  userNumber!:string;
  constructor(private emailService:EmailService,private userService:UserService, private http:HttpClient,private userToEmailService:UserToEmailService){
      this.userService=userService;
      this.emailService=emailService;
      this.userToEmailService=userToEmailService;
  }

  ngOnInit(): void {
     this.getUserListId('');
     this.userService.currentMessage.subscribe((mes: string)=>{this.message=mes;});
     // this.userList=this.userListReturn();
     this.userService.currentMessageClick.subscribe((mess: string)=>{this.isClicked=mess;});

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

  getUserListId(idS:string):MailUser[]{
    this.userService.changeMessageClick("1");
    this.userList=[];
    if(idS.length==0){
        this.userService.getUsers().subscribe(use=>{
          for(let n = 0; n < use.length; n++){
            var em=new MailUser();
            em=use[n];
            this.userList.push(em);
            this.permanentList.push(em);
         }});
         this.userToEmailService.setUserList(this.userList);
    }
    else{
      var idString=''+this.getUserNumber(idS);
    var id:number;
    id=parseInt(idString);
    this.userService.getUsersId(id).subscribe(use=>{
    this.selectedUser=use;
    })
  }
   // console.log(this.userList);
   this.userService.changeMessage(idS);
   //this.userService.changeMessageClick('0');
    return this.userList;
  }

  getUserNumber(name:string):number{
    var list=this.permanentList;
    var returnnum=0;
    for(let n = 0; n < list.length; n++){
     var em= list[n];
      if((em.name+' '+em.surname).localeCompare(name)==0){
        returnnum= n+1;
      }
  }
  return returnnum;

}
makeFalse(){
     this.userService.changeMessageClick('0');
}
}

import { Component, Input } from '@angular/core';
import {faEnvelope,faBars,faUserCircle,faInbox,faStar,faClock,faPaperPlane,faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { MailUser } from 'MailUser';
import { UserComponent } from './user/user.component';
//import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /* ngOnInit(){
    $(document).ready(function () {

      $(".more").click(function () {
          $(".appear").toggle("fast");
      });
  });
  }*/
  ngOnInit(){
    
  }
  title = 'gmailApp';
  faEnvelope = faEnvelope;
  faBars=faBars;
  faUserCircle=faUserCircle;
  faInbox=faInbox;
  faStar=faStar;
  faClock=faClock;
  faPaperPlane=faPaperPlane;
  faStickyNote=faStickyNote;
}

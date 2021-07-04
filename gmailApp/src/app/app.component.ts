import { Component } from '@angular/core';
import {faEnvelope,faBars,faUserCircle,faInbox,faStar,faClock,faPaperPlane,faStickyNote } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

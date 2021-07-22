import { Component, OnInit } from '@angular/core';
import {faEnvelope,faBars,faUserCircle,faInbox,faStar,faClock,faPaperPlane,faStickyNote } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faEnvelope = faEnvelope;
  faBars=faBars;
  faUserCircle=faUserCircle;
  faInbox=faInbox;
  faStar=faStar;
  faClock=faClock;
  faPaperPlane=faPaperPlane;
  faStickyNote=faStickyNote;
}

import { Component, OnInit } from '@angular/core';
import { EmailDetailsService } from '../shared/email-details.service';
import { faCoffee, faPenNib,faEnvelope,faStar,faPaperPlane,faBug,faTrash,faBed,faArchive } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-email-details',
  templateUrl: './email-details.component.html',
  styles: [
  ]
})
export class EmailDetailsComponent implements OnInit {
  faCoffee = faCoffee;
  faPenNib=faPenNib;
  faEnvelope=faEnvelope;
  faStar=faStar;
  faPaperPlane=faPaperPlane;
  faBug=faBug;
  faTrash=faTrash;
  faBed=faBed;
  faArchive=faArchive;
  constructor(public service: EmailDetailsService) { }

  ngOnInit(): void {
  this.service.refeshList();
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailDetailsService } from 'src/app/shared/email-details.service';
import { faCoffee, faPenNib,faEnvelope,faStar,faPaperPlane,faBug,faTrash,faBed,faArchive } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-email-details-form',
  templateUrl: './email-details-form.component.html',
  styles: [
  ]
})
export class EmailDetailsFormComponent implements OnInit {
  faCoffee = faCoffee;
  faPenNib=faPenNib;
  faEnvelope=faEnvelope;
  faStar=faStar;
  faPaperPlane=faPaperPlane;
  faBug=faBug;
  faTrash=faTrash;
  faBed=faBed;
  faArchive=faArchive;
  constructor(public service:EmailDetailsService) { }

  ngOnInit(): void {
  }


}

import { Component } from '@angular/core';


import { faCoffee, faPenNib,faEnvelope,faStar,faPaperPlane,faBug,faTrash,faBed,faArchive } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlperenGmail';
  faCoffee = faCoffee;
  faPenNib=faPenNib;
  faEnvelope=faEnvelope;
  faStar=faStar;
  faPaperPlane=faPaperPlane;
  faBug=faBug;
  faTrash=faTrash;
  faBed=faBed;
  faArchive=faArchive;
}

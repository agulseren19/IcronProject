import { Component, NgModule, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/shared/user-details.service';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../user-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styles: [
  ]
})
export class UserDetailsFormComponent implements OnInit {

  constructor(public service:UserDetailsService) { }

  ngOnInit(): void {
  }

}

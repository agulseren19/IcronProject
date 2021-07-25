import { Injectable } from '@angular/core';
import { UserDetails } from './user-details.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }

formData: UserDetails=new UserDetails();

}

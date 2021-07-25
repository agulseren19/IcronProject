import { Injectable } from '@angular/core';
import { EmailDetails } from './email-details.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmailDetailsService {

  constructor(private http:HttpClient) { }

formData: EmailDetails=new EmailDetails();
list: EmailDetails[];
readonly baseURL="http://localhost:18910/api/emails"


refeshList(){
  this.http.get(this.baseURL).toPromise().then(res =>this.list=res as EmailDetails[]);
}

}


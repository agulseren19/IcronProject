import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { EmailComponent } from './email/email.component';
import { SentEmailComponent } from './sent-email/sent-email.component';
//import { UserComponent } from './user/user.component';

const routes: Routes = [
  //{path:'',redirectTo:'/'},
  {path:'snoozed',component:BlankComponent},
  {path:'drafts',component:BlankComponent},
  //{path:'login',component:UserComponent},
  {path:'inbox',component:EmailComponent},
  {path:'sent',component:SentEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

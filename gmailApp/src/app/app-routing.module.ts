import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path:'',redirectTo:'/inbox',pathMatch:’full'},
  //{path:'inbox',component:InboxComponent},
  //{path:'sent',component:SentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

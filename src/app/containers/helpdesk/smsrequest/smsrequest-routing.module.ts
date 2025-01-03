import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmsrequestComponent } from './smsrequest.component';
import { ViewsmsrequestComponent } from './viewsmsrequest/viewsmsrequest.component';

const routes: Routes = [
  { 
    path: 'list', 
    component: SmsrequestComponent 
  },
  {
     path: 'view',
      component: ViewsmsrequestComponent 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsrequestRoutingModule { }

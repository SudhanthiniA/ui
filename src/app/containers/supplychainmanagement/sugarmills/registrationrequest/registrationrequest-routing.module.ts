import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationrequestComponent } from './registrationrequest.component';
import { ViewregistrationrequestComponent } from './viewregistrationrequest/viewregistrationrequest.component';
import { AddeditregistrationrequestComponent } from './addeditregistrationrequest/addeditregistrationrequest.component';


const routes: Routes = [
  {
    path : 'list',
    component : RegistrationrequestComponent
  },
  {
    path : 'view/:Id',
    component : ViewregistrationrequestComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditregistrationrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationrequestRoutingModule { }

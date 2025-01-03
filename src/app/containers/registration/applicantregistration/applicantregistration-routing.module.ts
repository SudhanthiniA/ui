import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantregistrationComponent } from './applicantregistration.component';
// import { AddstockavailabilityComponent } from './addstockavailability/addstockavailability.component';


const routes: Routes = [
  {
    path : 'add',
    component : ApplicantregistrationComponent
  }
  // {
  //   path : 'add',
  //   component : AddstockavailabilityComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantregistrationRoutingModule { }

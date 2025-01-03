import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantprofileComponent } from './applicantprofile.component';
import { ApplicantstatusComponent } from './applicantstatus/applicantstatus.component';


const routes: Routes = [
  {
    path : 'add',
    component : ApplicantprofileComponent
  },
  {
    path : 'status',
    component : ApplicantstatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantprofileRoutingModule { }

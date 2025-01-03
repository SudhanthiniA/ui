import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ApplicantprofileRoutingModule } from './applicantprofile-routing.module';
import { ApplicantprofileComponent } from './applicantprofile.component';
import { ApplicantstatusComponent } from './applicantstatus/applicantstatus.component';
// import { AddstockavailabilityComponent } from './addstockavailability/addstockavailability.component';

@NgModule({
  declarations: [
    ApplicantprofileComponent,
    ApplicantstatusComponent, 
    // AddstockavailabilityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApplicantprofileRoutingModule
  ]
})
export class ApplicantprofileModule { }

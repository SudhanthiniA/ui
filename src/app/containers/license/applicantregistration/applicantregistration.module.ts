import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import {ApplicantregistrationRoutingModule} from './applicantregistration-routing.module';
import { ApplicantregistrationComponent } from './applicantregistration.component';



@NgModule({
  declarations: [ApplicantregistrationComponent],
  imports: [
    CommonModule,
    ApplicantregistrationRoutingModule,
    SharedModule
  ]
})
export class ApplicantregistrationModule { }

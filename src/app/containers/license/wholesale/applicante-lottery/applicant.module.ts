import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { ViewComponent } from './view/view.component'
import { ApplicantComponent } from './applicant.component'


@NgModule({
  declarations: [ViewComponent,ApplicantComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApplicantRoutingModule
  ]
})
export class ApplicantModule { }

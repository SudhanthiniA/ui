import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ReportservicerequestRoutingModule } from './reportservicerequest-routing.module';
import { ReportservicerequestComponent } from './reportservicerequest.component';


@NgModule({
  declarations: [ReportservicerequestComponent],
  imports: [
    CommonModule,
    ReportservicerequestRoutingModule,
    SharedModule
  ]
})
export class ReportservicerequestModule { }

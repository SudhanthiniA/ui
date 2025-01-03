import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ReportincidentRoutingModule } from './reportincident-routing.module';
import { ReportincidentComponent } from './reportincident.component';


@NgModule({
  declarations: [ReportincidentComponent],
  imports: [
    CommonModule,
    ReportincidentRoutingModule,
    SharedModule
  ]
})
export class ReportincidentModule { }

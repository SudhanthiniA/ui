import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ReportqueryRoutingModule } from './reportquery-routing.module';
import { ReportqueryComponent } from './reportquery.component';


@NgModule({
  declarations: [ReportqueryComponent],
  imports: [
    CommonModule,
    ReportqueryRoutingModule,
    SharedModule
  ]
})
export class ReportqueryModule { }

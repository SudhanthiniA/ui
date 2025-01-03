import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryreportComponent } from './summaryreport.component';
import { SummaryreportRoutingModule } from './summaryreport-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';



@NgModule({
  declarations: [SummaryreportComponent],
  imports: [
    CommonModule,
    SummaryreportRoutingModule,
    SharedModule
  ]
})
export class SummaryreportModule { }

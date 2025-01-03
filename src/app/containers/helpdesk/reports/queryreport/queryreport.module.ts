import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { QueryreportRoutingModule } from './queryreport-routing.module';
import { QueryreportComponent } from './queryreport.component';

@NgModule({
  declarations: [QueryreportComponent],
  imports: [
    CommonModule,
    QueryreportRoutingModule,
    SharedModule
  ]
})
export class QueryreportModule { }

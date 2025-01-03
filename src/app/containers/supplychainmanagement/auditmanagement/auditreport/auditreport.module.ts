import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AuditreportRoutingModule } from './auditreport-routing.module';
import { AuditreportComponent } from './auditreport.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AuditreportComponent, ViewComponent],
  imports: [
    CommonModule,
    AuditreportRoutingModule,
    SharedModule
  ]
})
export class AuditreportModule { }

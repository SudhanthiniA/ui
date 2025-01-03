import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AuditmanagementRoutingModule } from './auditmanagement-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AuditmanagementRoutingModule
  ]
})
export class AuditmanagementModule { }

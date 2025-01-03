import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwapprovalflowRoutingModule } from './mwapprovalflow-routing.module';
import { MwapprovalflowComponent } from './mwapprovalflow.component';
import { ViewmwindentapprovalComponent } from './viewmwindentapproval/viewmwindentapproval.component';

@NgModule({
  declarations: [MwapprovalflowComponent, ViewmwindentapprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwapprovalflowRoutingModule
  ]
})
export class MwapprovalflowModule { }

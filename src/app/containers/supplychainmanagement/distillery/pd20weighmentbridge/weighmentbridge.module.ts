import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeighmentbridgeRoutingModule } from './weighmentbridge-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';


@NgModule({
  declarations: [AddComponent, ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    WeighmentbridgeRoutingModule,
    SharedModule
  ]
})
export class WeighmentbridgeModule { }

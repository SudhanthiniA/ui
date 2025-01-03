import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NdtpermitRoutingModule } from './ndtpermit-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import { NdtpermitComponent } from './ndtpermit.component';


@NgModule({
  declarations: [AddComponent, ViewComponent, ApprovalComponent,NdtpermitComponent],
  imports: [
    CommonModule,
    NdtpermitRoutingModule,
    SharedModule
  ]
})
export class NdtpermitModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllotmentApprovalRoutingModule } from './allotment-approval-routing.module';
import { AllotmentApprovalComponent } from './allotment-approval.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { ViewallotmentapprovalComponent } from './viewallotmentapproval/viewallotmentapproval.component';

@NgModule({
  declarations: [
    AllotmentApprovalComponent, 
    ViewallotmentapprovalComponent
  ],
  imports: [
    CommonModule,
    AllotmentApprovalRoutingModule,
    SharedModule
  ]
})
export class AllotmentApprovalModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllotmentApprovalComponent } from './allotment-approval.component';
import { ViewallotmentapprovalComponent } from './viewallotmentapproval/viewallotmentapproval.component';

const routes: Routes = [
  { path: 'list', component: AllotmentApprovalComponent },
  {path: 'view/:Id', component: ViewallotmentapprovalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllotmentApprovalRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditVerificationComponent } from './addedit-verification/addedit-verification.component';

import { VerificationTypeComponent } from './verification-type.component';
import { ViewVerificationtypeComponent } from './view-verificationtype/view-verificationtype.component';

const routes: Routes = [
  { path: 'list', component: VerificationTypeComponent },
  { path: 'add', component: AddeditVerificationComponent },
  { path: 'edit/:Id', component: AddeditVerificationComponent },
  { path: 'view/:Id', component: ViewVerificationtypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationTypeRoutingModule { }

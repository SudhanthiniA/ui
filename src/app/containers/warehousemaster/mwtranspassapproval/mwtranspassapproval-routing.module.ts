import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwtranspassapprovalComponent } from './mwtranspassapproval.component';
import { AddmwtranspassapprovalComponent } from './addmwtranspassapproval/addmwtranspassapproval.component';
import { ViewmwtranspassapprovalComponent } from './viewmwtranspassapproval/viewmwtranspassapproval.component';
import { DispatchmwtranspassapprovalComponent } from './dispatchmwtranspassapproval/dispatchmwtranspassapproval.component';
import { CancelmodifyComponent } from './cancelmodify/cancelmodify.component';

const routes: Routes = [
  { path: 'list', component: MwtranspassapprovalComponent },
  { path: 'add', component: AddmwtranspassapprovalComponent },
  { path: 'view', component: ViewmwtranspassapprovalComponent },
  { path: 'dispatch', component: DispatchmwtranspassapprovalComponent },
  { path: 'cancelmodify', component: CancelmodifyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwtranspassapprovalRoutingModule { }

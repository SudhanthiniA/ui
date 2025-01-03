import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingForFlComponent } from './bottling-for-fl.component';
import { AddeditbottlingComponent } from './addeditbottling/addeditbottling.component';
import { ViewbottleComponent } from './viewbottle/viewbottle.component';
import { ApprovalMatrixComponent } from './approval-matrix/approval-matrix.component';
import { BottlingapprovallistComponent } from './bottlingapprovallist/bottlingapprovallist.component';

const routes: Routes = [{ path: 'list', component: BottlingForFlComponent },
{ path: 'add', component: AddeditbottlingComponent },
{ path: 'view/:id', component: ViewbottleComponent },
{ path: 'approval', component: ApprovalMatrixComponent },
{ path: 'approvallist', component: BottlingapprovallistComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingForFlRoutingModule { }

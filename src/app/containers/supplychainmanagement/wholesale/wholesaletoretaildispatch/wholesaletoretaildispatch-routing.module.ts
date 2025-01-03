import { NgModule } from '@angular/core';
import { DeoApprovalAddComponent } from './deo-approval-add/deo-approval-add.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { RequestforcancellationComponent } from './requestforcancellation/requestforcancellation.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },

  {
    path: 'add',
    component: DeoApprovalAddComponent
  },
  {
    path: 'requestforcancellation',
    component: RequestforcancellationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaletoretaildispatchRoutingModule { }

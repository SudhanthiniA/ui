import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotatransferrequestComponent } from './quotatransferrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeolistComponent } from './deolist/deolist.component';
import { ApprovalComponent } from './approval/approval.component';

const routes: Routes = [
  { path: 'list', component: QuotatransferrequestComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'deo', component: DeolistComponent },
  { path: 'approval', component: ApprovalComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotatransferrequestRoutingModule { }

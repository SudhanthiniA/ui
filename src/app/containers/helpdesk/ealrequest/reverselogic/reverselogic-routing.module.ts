import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReverselogicComponent } from './reverselogic.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';

const routes: Routes = [
  { path: 'list', component: ReverselogicComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'approval', component: ApprovalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReverselogicRoutingModule { }

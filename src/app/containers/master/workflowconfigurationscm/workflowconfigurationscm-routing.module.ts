import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkflowconfigurationscmComponent } from './workflowconfigurationscm.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: WorkflowconfigurationscmComponent },
  { path: 'edit', component: EditComponent },
  { path: 'view', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowconfigurationscmRoutingModule { }

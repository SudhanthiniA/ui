import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkflowComponent } from './workflow.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';
import { ViewworkflowComponent } from './viewworkflow/viewworkflow.component';

const routes: Routes = [
  { path: 'list', component: WorkflowComponent },
  { path: 'add', component: AddworkflowComponent },
  { path: 'view', component: ViewworkflowComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }

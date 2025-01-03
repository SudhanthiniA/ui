import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowmanagementComponent } from './workflowmanagement.component';
import { AddeditworkflowmanagementComponent } from './addeditworkflowmanagement/addeditworkflowmanagement.component';
import { ViewworkflowmanagementComponent } from './viewworkflowmanagement/viewworkflowmanagement.component';

const routes: Routes = [
  {
    path : 'list',
    component : WorkflowmanagementComponent
  },
  {
    path : 'add',
    component : AddeditworkflowmanagementComponent
  },
  {
    path : 'edit/:id',
    component : AddeditworkflowmanagementComponent
  },
  {
    path : 'view/:id',
    component : ViewworkflowmanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowmanagementRoutingModule { }

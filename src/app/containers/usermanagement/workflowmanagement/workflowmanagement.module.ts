import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { WorkflowmanagementRoutingModule } from './workflowmanagement-routing.module';
import { WorkflowmanagementComponent } from './workflowmanagement.component';
import { AddeditworkflowmanagementComponent } from './addeditworkflowmanagement/addeditworkflowmanagement.component';
import { ViewworkflowmanagementComponent } from './viewworkflowmanagement/viewworkflowmanagement.component';

@NgModule({
  declarations: [
    WorkflowmanagementComponent, 
    AddeditworkflowmanagementComponent, 
    ViewworkflowmanagementComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    WorkflowmanagementRoutingModule
  ]
})
export class WorkflowmanagementModule { }

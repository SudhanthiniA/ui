import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';
import { ViewworkflowComponent } from './viewworkflow/viewworkflow.component';



@NgModule({
  declarations: [WorkflowComponent, AddworkflowComponent, ViewworkflowComponent],
  imports: [
    CommonModule,
    SharedModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }

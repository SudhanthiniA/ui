import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WorkflowconfigurationRoutingModule } from './workflowconfiguration-routing.module';
import { WorkflowconfigurationComponent } from './workflowconfiguration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [WorkflowconfigurationComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    WorkflowconfigurationRoutingModule,SharedModule
  ]
})
export class WorkflowconfigurationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {WorkflowconfigurationscmRoutingModule} from './workflowconfigurationscm-routing.module';
import { WorkflowconfigurationscmComponent } from './workflowconfigurationscm.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [WorkflowconfigurationscmComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    WorkflowconfigurationscmRoutingModule
  ]
})
export class WorkflowconfigurationscmModule { }

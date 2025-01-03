import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AssigntheofficerforinvestigatingRoutingModule } from './assigntheofficerforinvestigating-routing.module';
import { AssigntheofficerforinvestigatingComponent } from './assigntheofficerforinvestigating.component';
import { AddassigntheofficerforinvestigatingComponent } from './addassigntheofficerforinvestigating/addassigntheofficerforinvestigating.component';
import { ViewassigntheofficerforinvestigatingComponent } from './viewassigntheofficerforinvestigating/viewassigntheofficerforinvestigating.component';

@NgModule({
  declarations: [AssigntheofficerforinvestigatingComponent, AddassigntheofficerforinvestigatingComponent, ViewassigntheofficerforinvestigatingComponent],
  imports: [
    CommonModule,
    SharedModule,
    AssigntheofficerforinvestigatingRoutingModule  ]
})
export class AssigntheofficerforinvestigatingModule { }

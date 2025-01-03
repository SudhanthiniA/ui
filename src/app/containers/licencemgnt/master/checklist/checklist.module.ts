import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ChecklistRoutingModule } from './checklist-routing.module';
import { ChecklistComponent } from './checklist.component';
import { ViewchecklistComponent } from './viewchecklist/viewchecklist.component';



@NgModule({
  declarations: [ChecklistComponent, ViewchecklistComponent,],
  imports: [
    CommonModule,
    SharedModule,
    ChecklistRoutingModule
  ]
})
export class ChecklistModule { }

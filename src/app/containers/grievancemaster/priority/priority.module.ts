import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { PriorityRoutingModule } from './priority-routing.module';
import { PriorityComponent } from './priority.component';
import { AddpriorityComponent } from './addpriority/addpriority.component';
import { ViewpriorityComponent } from './viewpriority/viewpriority.component';



@NgModule({
  declarations: [PriorityComponent, AddpriorityComponent, ViewpriorityComponent],
  imports: [
    CommonModule,
    SharedModule,
    PriorityRoutingModule
  ]
})
export class PriorityModule { }

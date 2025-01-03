import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DispatchRoutingModule } from './dispatch-routing.module';
import { DispatchComponent } from './dispatch.component';
import { AddeditdispatchComponent } from './addeditdispatch/addeditdispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';
import { ApprovalComponent } from './approval/approval.component';

@NgModule({
  declarations: [
    DispatchComponent, 
    AddeditdispatchComponent, 
    ViewdispatchComponent,
    ApprovalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DispatchRoutingModule
  ]
})
export class DispatchModule { }

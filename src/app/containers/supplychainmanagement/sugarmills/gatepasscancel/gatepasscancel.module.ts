import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { GatepasscancelRoutingModule } from './gatepasscancel-routing.module';
import { GatepasscancelComponent } from './gatepasscancel.component';
import { AddgatepasscancelComponent } from './addgatepasscancel/addgatepasscancel.component';
import { ViewgatepasscancelComponent } from './viewgatepasscancel/viewgatepasscancel.component';

@NgModule({
  declarations: [
    GatepasscancelComponent, 
    AddgatepasscancelComponent, 
    ViewgatepasscancelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GatepasscancelRoutingModule
  ]
})
export class GatepasscancelModule { }

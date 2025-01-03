import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RegisterasexportunitRoutingModule } from './registerasexportunit-routing.module';
import { RegisterasexportunitComponent } from './registerasexportunit.component';
import { AddregisterasexportunitComponent } from './addregisterasexportunit/addregisterasexportunit.component';
import { ViewregisterasexportunitComponent } from './viewregisterasexportunit/viewregisterasexportunit.component';



@NgModule({
  declarations: [RegisterasexportunitComponent, AddregisterasexportunitComponent, ViewregisterasexportunitComponent],
  imports: [
    CommonModule,
    RegisterasexportunitRoutingModule,
    SharedModule
  ]
})
export class RegisterasexportunitModule { }

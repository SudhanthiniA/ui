import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TranspassparentloginRoutingModule } from './transpassparentlogin-routing.module';
import { TranspassparentloginComponent } from './transpassparentlogin.component';
import { AddtranspassparentloginComponent } from './addtranspassparentlogin/addtranspassparentlogin.component';
import { ViewtranspassparentloginComponent } from './viewtranspassparentlogin/viewtranspassparentlogin.component';


@NgModule({
  declarations: [TranspassparentloginComponent, AddtranspassparentloginComponent, ViewtranspassparentloginComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranspassparentloginRoutingModule
  ]
})
export class TranspassparentloginModule { }

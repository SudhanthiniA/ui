import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TranstoginplantRoutingModule } from './transtoginplant-routing.module';
import { TranstoginplantComponent } from './transtoginplant.component';
import { AddtranstoginplantComponent } from './addtranstoginplant/addtranstoginplant.component';
import { ViewtranstoginplantComponent } from './viewtranstoginplant/viewtranstoginplant.component';



@NgModule({
  declarations: [TranstoginplantComponent, AddtranstoginplantComponent, ViewtranstoginplantComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranstoginplantRoutingModule
  ]
})
export class TranstoginplantModule { }

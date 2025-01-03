import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {  MstistoffgRoutingModule } from './mstistoffg-routing.module';
import { MstistoffgComponent } from './mstistoffg.component';
import { AddmstistmolassesComponent } from './addmstistmolasses/addmstistmolasses.component';
import { ViewmstistmolassesComponent } from './viewmstistmolasses/viewmstistmolasses.component';

@NgModule({
  declarations: [MstistoffgComponent, AddmstistmolassesComponent, ViewmstistmolassesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MstistoffgRoutingModule
  ]
})
export class MstistoffgModule { }

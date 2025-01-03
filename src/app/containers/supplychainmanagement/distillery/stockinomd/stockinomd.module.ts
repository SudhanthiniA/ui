import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { StockinomdComponent } from './stockinomd.component';
import { AddstockinomdComponent } from './addstockinomd/addstockinomd.component';
import { ViewstockinomdComponent } from './viewstockinomd/viewstockinomd.component';
import { StockinomdRoutingModule } from './stockinomd-routing.module';
@NgModule({
  declarations: [
    StockinomdComponent,
    AddstockinomdComponent,
    ViewstockinomdComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StockinomdRoutingModule
  ]
})
export class StockinomdModule { }

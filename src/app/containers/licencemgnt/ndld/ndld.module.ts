import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NdldComponent } from './ndld.component';
import { Viewflid3Component } from './viewflid3/viewflid3.component';
import { NdldRoutingModule } from './ndld-routing.module';



@NgModule({
  declarations: [NdldComponent, Viewflid3Component],
  imports: [
    CommonModule,
    SharedModule,
    NdldRoutingModule
  ]
})
export class ndldModule { }

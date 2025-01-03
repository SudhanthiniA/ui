import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '@appThemeShared/shared.module';
import { MethylalcoholRoutingModule } from './methylalcohol-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MethylalcoholRoutingModule
  ]
})
export class MethylalcoholModule { }

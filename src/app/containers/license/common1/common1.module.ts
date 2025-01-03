import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { Common1RoutingModule } from './common1-routing.module';
import { Common1Component } from './common1.component';



@NgModule({
  declarations: [Common1Component],
  imports: [
    Common1RoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class Common1Module { }

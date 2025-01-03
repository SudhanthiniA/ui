import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Addl1Component } from './addl1/addl1.component';
import { Viewl1Component } from './viewl1/viewl1.component';
import { L1Component } from './l1.component';
import { L1RoutingModule } from './l1-routing.module';



@NgModule({
  declarations: [Addl1Component, Viewl1Component,L1Component],
  imports: [
    CommonModule,
    SharedModule,
    L1RoutingModule
  ]
})
export class L1Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { L2Component } from './l2.component';
import { L2RoutingModule } from './l2-routing.module';
import { Addl2Component } from './addl2/addl2.component';
import { Viewl2Component } from './viewl2/viewl2.component';



@NgModule({
  declarations: [Addl2Component, Viewl2Component,L2Component],
  imports: [
    CommonModule,
    L2RoutingModule,
    SharedModule
  ]
})
export class L2Module { }

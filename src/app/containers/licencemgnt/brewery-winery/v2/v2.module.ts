import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { V2RoutingModule } from './v2-routing.module';
import { Viewv2Component } from './viewv2/viewv2.component';
import { V2Component } from './v2.component';



@NgModule({
  declarations: [Viewv2Component, V2Component],
  imports: [
    CommonModule,
    SharedModule,
    V2RoutingModule
  ]
})
export class V2Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { V1RoutingModule } from './v1-routing.module';
import { Viewv1Component } from './viewv1/viewv1.component';
import { V1Component } from './v1.component';



@NgModule({
  declarations: [Viewv1Component, V1Component],
  imports: [
    CommonModule,
    SharedModule,
    V1RoutingModule
  ]
})
export class V1Module { }

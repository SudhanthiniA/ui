import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { V4RoutingModule } from './v4-routing.module';
// import { Viewv4Component } from './viewv4/viewv4.component';
import { V4Component } from './v4.component';



@NgModule({
  declarations: [ V4Component],
  imports: [
    CommonModule,
    SharedModule,
    V4RoutingModule
  ]
})
export class V4Module { }

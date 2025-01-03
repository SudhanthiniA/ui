import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { V3RoutingModule } from './v3-routing.module';
// import { Viewv3Component } from './viewv3/viewv3.component';
import { V3Component } from './v3.component';



@NgModule({
  declarations: [ V3Component],
  imports: [
    CommonModule,
    SharedModule,
    V3RoutingModule
  ]
})
export class V3Module { }

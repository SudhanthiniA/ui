import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '@appThemeShared/shared.module';
import { NiveshmitraRoutingModule } from './niveshmitra-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    NiveshmitraRoutingModule
  ]
})
export class NiveshmitraModule { }

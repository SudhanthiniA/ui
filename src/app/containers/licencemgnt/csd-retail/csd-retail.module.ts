import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { CsdRetailRoutingModule } from './csd-retail-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    CsdRetailRoutingModule
  ]
})
export class CsdRetailModule { }

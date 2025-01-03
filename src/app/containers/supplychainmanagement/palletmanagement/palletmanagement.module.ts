import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PalletmanagementRoutingModule } from './palletmanagement-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PalletmanagementRoutingModule,
    SharedModule
  ]
})
export class PalletmanagementModule { }

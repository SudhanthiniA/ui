import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { PalletcasecodemappingRoutingModule } from './palletcasecodemapping-routing.module';
import { PalletcasecodemappingComponent } from './palletcasecodemapping.component';


@NgModule({
  declarations: [PalletcasecodemappingComponent],
  imports: [
    CommonModule,
    PalletcasecodemappingRoutingModule,
    SharedModule
  ]
})
export class PalletcasecodemappingModule { }

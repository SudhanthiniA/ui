import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PalletcasecodeunmappingRoutingModule } from './palletcasecodeunmapping-routing.module';
import { PalletcasecodeunmappingComponent } from './palletcasecodeunmapping.component';


@NgModule({
  declarations: [PalletcasecodeunmappingComponent],
  imports: [
    CommonModule,
    PalletcasecodeunmappingRoutingModule,
    SharedModule
  ]
})
export class PalletcasecodeunmappingModule { }

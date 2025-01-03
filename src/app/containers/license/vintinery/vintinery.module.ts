import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { VintineryRoutingModule } from './vintinery-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    VintineryRoutingModule
  ]
})
export class VintineryModule { }

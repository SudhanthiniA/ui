import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import {HbrRoutingModule} from './hbr-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        HbrRoutingModule,
        SharedModule
  ]
})
export class HbrModule { }

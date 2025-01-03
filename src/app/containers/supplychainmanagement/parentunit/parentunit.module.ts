import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ParentunitRoutingModule } from './parentunit-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParentunitRoutingModule,
    SharedModule
  ]
})
export class ParentunitModule { }

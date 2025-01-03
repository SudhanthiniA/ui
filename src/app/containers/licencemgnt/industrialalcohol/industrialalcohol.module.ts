import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { IndustrialalcoholRoutingModule } from './industrialalcohol-routing.module';




@NgModule({
  
  imports: [
    SharedModule,
    IndustrialalcoholRoutingModule
  ],
  providers: [DatePipe],
  declarations: [],
})
export class IndustrialalcoholModule { }

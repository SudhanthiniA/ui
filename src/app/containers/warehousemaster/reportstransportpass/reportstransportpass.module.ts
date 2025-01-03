import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReportstransportpassRoutingModule } from './reportstransportpass-routing.module';
import { ReportstransportpassComponent } from './reportstransportpass.component';
 
@NgModule({
  declarations: [ReportstransportpassComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportstransportpassRoutingModule
  ]
})
export class ReportstransportpassModule { }

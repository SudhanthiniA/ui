import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockreportRoutingModule } from './stockreport-routing.module';
import { StockreportComponent } from './stockreport.component';


@NgModule({
  declarations: [StockreportComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockreportRoutingModule
  ]
})
export class StockreportModule { }

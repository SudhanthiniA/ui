import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockmovementRoutingModule } from './stockmovement-routing.module';
import { StockmovementComponent } from './stockmovement.component';

@NgModule({
  declarations: [StockmovementComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockmovementRoutingModule
  ] 
})
export class StockmovementModule { }

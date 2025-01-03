import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockmovementRoutingModule } from './stockmovement-routing.module';
import { StockmovementComponent } from './stockmovement.component';
import { AddstockmovementComponent } from './addstockmovement/addstockmovement.component';
import { ViewstockmovementComponent } from './viewstockmovement/viewstockmovement.component';


@NgModule({
  declarations: [StockmovementComponent, AddstockmovementComponent, ViewstockmovementComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockmovementRoutingModule
  ]
})
export class StockmovementModule { }

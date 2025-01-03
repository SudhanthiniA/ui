import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Ds1Component } from './ds1.component';
import { Ds1RoutingModule } from './ds1-routing.module';

@NgModule({
  declarations: [Ds1Component],
  imports: [
    CommonModule,
    SharedModule,
    Ds1RoutingModule
  ]
})
export class Ds1Module { }

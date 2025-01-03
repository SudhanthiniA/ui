import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Dispatchedmf4RoutingModule } from './dispatchedmf4-routing.module';
import { Dispatchedmf4Component } from './dispatchedmf4.component';



@NgModule({
  declarations: [Dispatchedmf4Component],
  imports: [
    CommonModule,
    SharedModule,
    Dispatchedmf4RoutingModule
  ]
})
export class Dispatchedmf4Module { }

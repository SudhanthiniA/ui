import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Formfl35RoutingModule } from './formfl35-routing.module';
import { Formfl35Component } from './formfl35.component';
import { Viewfl35Component } from './viewfl35/viewfl35.component';
import { Addfl35Component } from './addfl35/addfl35.component';


@NgModule({
  declarations: [Formfl35Component, Viewfl35Component, Addfl35Component],
  imports: [
    CommonModule,
    SharedModule,
    Formfl35RoutingModule
  ]
})
export class Formfl35Module { }

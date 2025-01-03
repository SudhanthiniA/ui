import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';


import { Formfl24RoutingModule } from './formfl24-routing.module';
import { Formfl24Component } from './formfl24.component';
import { Addfl24Component } from './addfl24/addfl24.component';
import { Viewfl24Component } from './viewfl24/viewfl24.component';


@NgModule({
  declarations: [Formfl24Component, Addfl24Component, Viewfl24Component],
  imports: [
    CommonModule,
    SharedModule,
    Formfl24RoutingModule
  ]
})
export class Formfl24Module { }

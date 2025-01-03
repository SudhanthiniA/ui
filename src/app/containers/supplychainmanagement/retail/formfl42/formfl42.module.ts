import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Formfl42RoutingModule } from './formfl42-routing.module';
import { Formfl42Component } from './formfl42.component';
import { Viewfl42Component } from './viewfl42/viewfl42.component';
import { Addfl42Component } from './addfl42/addfl42.component';


@NgModule({
  declarations: [Formfl42Component, Viewfl42Component, Addfl42Component],
  imports: [
    CommonModule,
    SharedModule,
    Formfl42RoutingModule
  ]
})
export class Formfl42Module { }

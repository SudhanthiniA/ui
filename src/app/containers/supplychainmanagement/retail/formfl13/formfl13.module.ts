import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Formfl13RoutingModule } from './formfl13-routing.module';
import { Formfl13Component } from './formfl13.component';
import { Addfl13Component } from './addfl13/addfl13.component';
import { Viewfl13Component } from './viewfl13/viewfl13.component';

@NgModule({
  declarations: [Formfl13Component, Addfl13Component, Viewfl13Component],
  imports: [
    CommonModule,
    SharedModule,
    Formfl13RoutingModule
  ]
})
export class Formfl13Module { }

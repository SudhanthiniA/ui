import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Formfl21RoutingModule } from './formfl21-routing.module';
import { Formfl21Component } from './formfl21.component';
import { Addfl21Component } from './addfl21/addfl21.component';
import { Viewfl21Component } from './viewfl21/viewfl21.component';


@NgModule({
  declarations: [Formfl21Component, Addfl21Component, Viewfl21Component],
  imports: [
    CommonModule,
    Formfl21RoutingModule,
    SharedModule
  ]
})
export class Formfl21Module { }

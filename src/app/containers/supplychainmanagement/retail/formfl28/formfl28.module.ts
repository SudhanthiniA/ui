import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Formfl28RoutingModule } from './formfl28-routing.module';
import { Formfl28Component } from './formfl28.component';
import { Viewfl28Component } from './viewfl28/viewfl28.component';
import { Addfl28Component } from './addfl28/addfl28.component';


@NgModule({
  declarations: [Formfl28Component, Viewfl28Component, Addfl28Component],
  imports: [
    CommonModule,
    SharedModule,
    Formfl28RoutingModule
  ]
})
export class Formfl28Module { }

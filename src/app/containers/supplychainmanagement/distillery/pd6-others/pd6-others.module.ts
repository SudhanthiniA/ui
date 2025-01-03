import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd6OthersRoutingModule } from './pd6-others-routing.module';
import { Pd6OthersComponent } from './pd6-others.component';
import { Addeditpd6Component } from './addeditpd6/addeditpd6.component';
import { Viewpd6Component } from './viewpd6/viewpd6.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Pd6OthersComponent, Addeditpd6Component, Viewpd6Component],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd6OthersRoutingModule
  ]
})
export class Pd6OthersModule { }

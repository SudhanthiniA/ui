import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {Fl16Pd25RoutingModule} from './fl16-pd25-routing.module';
import { Fl16Pd25Component } from './fl16-pd25.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [Fl16Pd25Component, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    Fl16Pd25RoutingModule
  ]
})
export class Fl16Pd25Module { }

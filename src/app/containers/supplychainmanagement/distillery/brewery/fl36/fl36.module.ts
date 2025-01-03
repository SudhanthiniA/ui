import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl36RoutingModule } from './fl36-routing.module';
import { Fl36Component } from './fl36.component';
import { Addfl36Component } from './addfl36/addfl36.component';
import { Viewfl36Component } from './viewfl36/viewfl36.component';
import { Acknowledgementfl36Component } from './acknowledgementfl36/acknowledgementfl36.component';
import { DraftfinallistComponent } from './draftfinallist/draftfinallist.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [PaymentComponent,Fl36Component, Addfl36Component, Viewfl36Component, Acknowledgementfl36Component, DraftfinallistComponent],
  imports: [
    CommonModule,
    SharedModule,
    Fl36RoutingModule
  ]
})
export class Fl36Module { }

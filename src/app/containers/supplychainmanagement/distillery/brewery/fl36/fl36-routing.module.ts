import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl36Component } from './fl36.component';
import { Addfl36Component } from './addfl36/addfl36.component';
import { Viewfl36Component } from './viewfl36/viewfl36.component';
import { Acknowledgementfl36Component } from './acknowledgementfl36/acknowledgementfl36.component';
import { DraftfinallistComponent } from './draftfinallist/draftfinallist.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path : 'list',
    component : Fl36Component
  },
  {
    path : 'payment',
    component : PaymentComponent
  },
  {
    path : 'draftfinallist',
    component : DraftfinallistComponent
  },
  {
    path: 'add',
    component : Addfl36Component
  },
  {
    path: 'acknowledge',
    component : Acknowledgementfl36Component
  },
  {
    path: 'view',
    component : Viewfl36Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl36RoutingModule { }

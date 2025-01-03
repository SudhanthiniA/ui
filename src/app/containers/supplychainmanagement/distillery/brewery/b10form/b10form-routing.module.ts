import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B10formComponent } from './b10form.component';
import { Addb10formComponent } from './addb10form/addb10form.component';
import { Viewb10formComponent } from './viewb10form/viewb10form.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {
    path : 'list',
    component : B10formComponent
  },
  {
    path : 'add',
    component : Addb10formComponent
  },
  {
    path : 'view',
    component : Viewb10formComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B10formRoutingModule { }

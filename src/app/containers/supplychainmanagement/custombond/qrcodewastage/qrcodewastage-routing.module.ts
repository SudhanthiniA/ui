import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodewastageComponent } from './qrcodewastage.component';
import { AddqrcodewastageComponent } from './addqrcodewastage/addqrcodewastage.component';
import { ViewqrcodewastageComponent } from './viewqrcodewastage/viewqrcodewastage.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path : 'list',
    component : QrcodewastageComponent
  },
  {
    path : 'add',
    component : AddqrcodewastageComponent
  },
  {
    path: 'view',
    component : ViewqrcodewastageComponent
  },
  {
    path: 'payment',
    component : PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrcodewastageRoutingModule { }

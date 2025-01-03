import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodewastageComponent } from './qrcodewastage.component';
import { AddqrcodewastageComponent } from './addqrcodewastage/addqrcodewastage.component';
import { ViewqrcodewastageComponent } from './viewqrcodewastage/viewqrcodewastage.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';

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
    component : PaymentscreenComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrcodewastageRoutingModule { }

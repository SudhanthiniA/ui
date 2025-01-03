import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { CsdDispatchComponent } from  './csd-dispatch.component';
import { EditdispatchComponent } from './editdispatch/editdispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path : 'list',
    component : CsdDispatchComponent
  },
  {
    path : 'edit',
    component : EditdispatchComponent
  },
  {
    path : 'view',
    component : ViewdispatchComponent
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
export class CsdDispatchRoutingModule { }

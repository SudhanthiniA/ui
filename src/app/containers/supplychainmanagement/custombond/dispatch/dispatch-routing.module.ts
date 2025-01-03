import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchComponent } from './dispatch.component';
import { AdddispatchComponent } from './adddispatch/adddispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';
import { EditdispatchComponent } from './editdispatch/editdispatch.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'list',
    component: DispatchComponent
  },
  {
    path: 'view',
    component: ViewdispatchComponent
  },
  {
    path: 'add',
    component: AdddispatchComponent
  },
  {
    path: 'edit',
    component: EditdispatchComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchRoutingModule { }

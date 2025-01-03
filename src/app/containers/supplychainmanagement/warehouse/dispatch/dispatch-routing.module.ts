import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchComponent } from './dispatch.component';
import { AdddispatchComponent } from './adddispatch/adddispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  { path: 'list', component: DispatchComponent },
  { path: 'add', component: AdddispatchComponent },
  { path: 'edit/:id', component: AdddispatchComponent },
   { path: 'view/:id', component: ViewdispatchComponent },
   { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwdispatchComponent } from './mwdispatch.component';
import { ViewmwdispatchComponent } from './viewmwdispatch/viewmwdispatch.component';
import { EditmwdispatchComponent } from './editmwdispatch/editmwdispatch.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'list', component: MwdispatchComponent },
  { path: 'view', component: ViewmwdispatchComponent },
  { path: 'edit', component: EditmwdispatchComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwdispatchRoutingModule { }

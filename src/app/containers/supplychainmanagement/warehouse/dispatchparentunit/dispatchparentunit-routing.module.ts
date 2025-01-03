import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchparentunitComponent } from './dispatchparentunit.component';
import { AdddispatchparentunitComponent } from './adddispatchparentunit/adddispatchparentunit.component';
import { ViewdispatchparentunitComponent } from './viewdispatchparentunit/viewdispatchparentunit.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [ 
  { path: 'list', component: DispatchparentunitComponent },
  { path: 'add', component: AdddispatchparentunitComponent },
  { path: 'view', component: ViewdispatchparentunitComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchparentunitRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispatchedComponent } from './dispatched.component';
import { AdddispatchedComponent } from './adddispatched/adddispatched.component';
import { ViewdispatchedComponent } from './viewdispatched/viewdispatched.component';
import { PaymentmappedComponent } from './paymentmapped/paymentmapped.component';

const routes: Routes = [ 
  {
    path : 'add',
    component : AdddispatchedComponent
  },
   {
    path : 'payment',
    component : PaymentmappedComponent
  },
  {
    path : 'view',
    component : ViewdispatchedComponent
  },
  {
    path : 'list',
    component : DispatchedComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchedRoutingModule { }

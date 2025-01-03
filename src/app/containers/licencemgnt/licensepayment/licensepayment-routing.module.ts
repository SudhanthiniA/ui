import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensepaymentComponent } from './licensepayment.component';
import { ViewlicensepaymentComponent } from './viewlicensepayment/viewlicensepayment.component';
import { PaymentacknowledgementComponent } from './paymentacknowledgement/paymentacknowledgement.component';

const routes: Routes = [
  {
    path : 'list',
    component : LicensepaymentComponent
  },
  {
  path : 'view',
  component : ViewlicensepaymentComponent 
},
{
  path : 'payment',
  component : PaymentacknowledgementComponent   
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensepaymentRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenserenewalComponent } from './licenserenewal.component';
// import { ViewlicenserenewalComponent } from './viewlicenserenewal/viewlicenserenewal.component';
// import { PaymentacknowledgementComponent } from './paymentacknowledgement/paymentacknowledgement.component';

const routes: Routes = [
  {
    path : 'list',
    component : LicenserenewalComponent
  }
//   {
//   path : 'view',
//   component : ViewlicenserenewalComponent 
// },
// {
//   path : 'payment',
//   component : PaymentacknowledgementComponent   
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenserenewalRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiritpurchasepermitIdComponent } from './spiritpurchasepermit-id.component';
import { AddspiritpurchasepermitIdComponent } from './addspiritpurchasepermit-id/addspiritpurchasepermit-id.component';
import { ViewspiritpurchasepermitIdComponent } from './viewspiritpurchasepermit-id/viewspiritpurchasepermit-id.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'list', component: SpiritpurchasepermitIdComponent},
  { path: 'payment', component: PaymentComponent},
  {path: 'add', component: AddspiritpurchasepermitIdComponent},
  {path: 'view', component: ViewspiritpurchasepermitIdComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpiritpurchasepermitIdRoutingModule { }

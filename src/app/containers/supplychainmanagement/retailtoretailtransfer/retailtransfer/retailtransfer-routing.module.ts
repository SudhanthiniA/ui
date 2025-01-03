import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailtransferComponent } from './retailtransfer.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';
import { QuotaComponent } from './quota/quota.component';

const routes: Routes = [
  { path: 'list', component: RetailtransferComponent },
  { path: 'quota', component: QuotaComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'payment', component: PaymentComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailtransferRoutingModule { }

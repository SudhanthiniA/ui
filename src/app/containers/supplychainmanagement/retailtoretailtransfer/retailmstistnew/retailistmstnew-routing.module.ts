import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailmstistnewComponent } from './retailmstistnew.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'list', component: RetailmstistnewComponent },
  { path: 'view', component: ViewComponent },
  { path: 'add', component: AddComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailistmstnewRoutingModule { }

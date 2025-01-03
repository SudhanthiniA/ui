import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeoscreenformgqComponent } from './deoscreenformgq.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'list', component: DeoscreenformgqComponent },
  { path: 'view', component: ViewComponent },
  { path: 'payment', component: PaymentComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeoscreenformgqRoutingModule { }

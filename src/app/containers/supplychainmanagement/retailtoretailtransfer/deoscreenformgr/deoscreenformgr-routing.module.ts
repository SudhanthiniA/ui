import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeoscreenformgrComponent } from './deoscreenformgr.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'list', component: DeoscreenformgrComponent },
  { path: 'view', component: ViewComponent },
  { path: 'payment', component: PaymentComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeoscreenformgrRoutingModule { }

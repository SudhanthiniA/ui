import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentoverviewComponent } from './paymentoverview.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: PaymentoverviewComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentoverviewRoutingModule { }

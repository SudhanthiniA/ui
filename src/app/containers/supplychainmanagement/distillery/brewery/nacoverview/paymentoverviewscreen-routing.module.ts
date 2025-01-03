import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentoverviewscreenComponent } from './paymentoverviewscreen.component';
import { ViewComponent } from './view/view.component';
import { PaymentoverviewComponent } from './paymentoverview/paymentoverview.component';

const routes: Routes = [
  {
    path : 'list',
    component : PaymentoverviewscreenComponent
  },
  {
    path : 'overview',
    component : PaymentoverviewComponent
  },
 
  {
    path : 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentoverviewscreenRoutingModule { }

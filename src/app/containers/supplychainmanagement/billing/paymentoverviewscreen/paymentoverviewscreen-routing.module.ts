import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentoverviewscreenComponent } from './paymentoverviewscreen.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : PaymentoverviewscreenComponent
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

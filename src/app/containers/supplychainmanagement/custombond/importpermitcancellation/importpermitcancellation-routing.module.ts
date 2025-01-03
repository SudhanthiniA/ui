import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitcancellationComponent } from './importpermitcancellation.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { 
    path: 'add', 
  component: ImportpermitcancellationComponent
},
  {
    path: 'view', 
    component: ViewComponent
  },
  {
    path: 'payment', 
    component: PaymentComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitcancellationRoutingModule { }

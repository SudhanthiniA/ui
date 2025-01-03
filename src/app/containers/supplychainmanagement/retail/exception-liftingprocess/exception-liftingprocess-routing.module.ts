import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceptionliftingprocessComponent } from './exceptionliftingprocess/exceptionliftingprocess.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';
import { RetailbrandwiseofficerviewComponent } from './retailbrandwiseofficerview/retailbrandwiseofficerview.component';
import { RetailbrandwiselistComponent } from './retailbrandwiselist/retailbrandwiselist.component';
import { PaymentviewComponent } from './paymentview/paymentview.component';

const routes: Routes = [
  
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'list',
    component: ExceptionliftingprocessComponent
  },
  {
    path: 'exceptionliftingprocessview',
    component: RetailbrandwiseofficerviewComponent
  },
  {
    path: 'exceptionliftingprocesslist',
    component: RetailbrandwiselistComponent
  },
  {
    path: 'paymentview',
    component: PaymentviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionLiftingprocessRoutingModule { }

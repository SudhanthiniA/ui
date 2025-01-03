import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandwisedetailsComponent } from './brandwisedetails.component';
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
    component: BrandwisedetailsComponent
  },
  {
    path: 'retailbrandwiseofficerview',
    component: RetailbrandwiseofficerviewComponent
  },
  {
    path: 'retailbrandwiselist',
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
export class BrandwisedetailsRoutingModule { }

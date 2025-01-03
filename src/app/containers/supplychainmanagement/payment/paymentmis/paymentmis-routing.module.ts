import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentmisComponent } from './paymentmis.component';
import { ViewpaymentmisComponent } from './viewpaymentmis/viewpaymentmis.component';
import { SubviewpaymentmisComponent } from './subviewpaymentmis/subviewpaymentmis.component';
import { Sub1viewpaymentmisComponent } from './sub1viewpaymentmis/sub1viewpaymentmis.component';
import { Sub2viewpaymentmisComponent } from './sub2viewpaymentmis/sub2viewpaymentmis.component';
const routes: Routes = [
  {
    path: 'list',
    component: PaymentmisComponent
  },
  {
    path: 'view',
    component: ViewpaymentmisComponent
  },
  {
    path: 'subview',
    component: SubviewpaymentmisComponent
  },
  {
    path: 'sub1view',
    component: Sub1viewpaymentmisComponent
  } ,
  {
    path: 'sub2view',
    component: Sub2viewpaymentmisComponent
  } 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentmisRoutingModule { }

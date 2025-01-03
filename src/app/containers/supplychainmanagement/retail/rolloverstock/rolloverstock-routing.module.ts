import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolloverstockComponent } from './rolloverstock.component';
import { AddrolloverstockComponent } from './addrolloverstock/addrolloverstock.component';
import { ViewrolloverstockComponent } from './viewrolloverstock/viewrolloverstock.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'list',
    component: RolloverstockComponent
  },
  {
    path: 'add',
    component: AddrolloverstockComponent
  },
  {
    path: 'view',
    component: ViewrolloverstockComponent
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
export class RolloverstockRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxingComponent } from './boxing.component';
import { AddboxingComponent } from './addboxing/addboxing.component';
import { ViewboxingComponent } from './viewboxing/viewboxing.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [ 
  {
    path : 'add',
    component : AddboxingComponent
  },
  {
    path : 'view',
    component : ViewboxingComponent
  },
  {
    path : 'list',
    component : BoxingComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxingRoutingModule { }

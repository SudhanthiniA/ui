import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandandlabelregistrationComponent } from './brandandlabelregistration.component';
import { AddbrandandlabelregistrationComponent } from './addbrandandlabelregistration/addbrandandlabelregistration.component';
import { ViewbrandandlabelregistrationComponent } from './viewbrandandlabelregistration/viewbrandandlabelregistration.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path : 'list',
    component : BrandandlabelregistrationComponent
  },
  {
    path : 'add',
    component : AddbrandandlabelregistrationComponent
  },
  {
    path : 'view',
    component : ViewbrandandlabelregistrationComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  }
]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class BrandandlabelregistrationRoutingModule { }

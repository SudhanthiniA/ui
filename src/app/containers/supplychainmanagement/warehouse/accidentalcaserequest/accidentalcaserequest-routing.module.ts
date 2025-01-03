import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccidentalcaserequestComponent } from './accidentalcaserequest.component';
import { AddaccidentalcaserequestComponent } from './addaccidentalcaserequest/addaccidentalcaserequest.component';
import { ViewaccidentalcaserequestComponent } from './viewaccidentalcaserequest/viewaccidentalcaserequest.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'list',
    component: AccidentalcaserequestComponent
  },
  {
    path: 'add',
    component: AddaccidentalcaserequestComponent
  },
  {
    path: 'view/:Id',
    component: ViewaccidentalcaserequestComponent
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
export class AccidentalcaserequestRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentalrequestComponent } from './accidentalrequest.component';
import { ApprovalComponent } from './approval/approval.component';
import { AddaccidentalrequestComponent } from './addaccidentalrequest/addaccidentalrequest.component';
import { ViewaccidentalrequestComponent } from './viewaccidentalrequest/viewaccidentalrequest.component';

import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'list',
    component: AccidentalrequestComponent
  },
  {
    path: 'add',
    component: AddaccidentalrequestComponent
  },
  {
    path: 'approval',
    component: ApprovalComponent
  },
  {
    path: 'view',
    component: ViewaccidentalrequestComponent
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
export class AccidentalrequestRoutingModule { }

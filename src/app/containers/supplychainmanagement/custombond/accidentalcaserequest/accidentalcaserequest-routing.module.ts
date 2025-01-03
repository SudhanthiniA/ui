import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AckComponent } from './ack/ack.component';
import { AccidentalcaserequestComponent } from './accidentalcaserequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'list',
    component: AccidentalcaserequestComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  { 
    path: 'ack', component: AckComponent
  },
  { 
    path: 'payment', component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentalcaserequestRoutingModule { }

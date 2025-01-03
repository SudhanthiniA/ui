import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentalrequestComponent } from './accidentalrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{ path: 'list', component: AccidentalrequestComponent },
{ path: 'add', component: AddComponent },
{ path: 'payment', component: PaymentComponent },
{ path: 'view', component: ViewComponent },
{ path: 'ack', component: AcknowledgementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentalrequestRoutingModule { }

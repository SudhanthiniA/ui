import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelrequestComponent } from './labelrequest.component';
import { AddlabelrequestComponent } from './addlabelrequest/addlabelrequest.component';
import { ViewlabelrequestComponent } from './viewlabelrequest/viewlabelrequest.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  { path: 'list', component: LabelrequestComponent },
  { path: 'add', component: AddlabelrequestComponent },
  { path: 'view', component: ViewlabelrequestComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelrequestRoutingModule { }

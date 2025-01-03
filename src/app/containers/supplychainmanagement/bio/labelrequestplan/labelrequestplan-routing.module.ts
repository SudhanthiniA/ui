import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelrequestplanComponent } from './labelrequestplan.component';
import { AddlabelrequestplanComponent } from './addlabelrequestplan/addlabelrequestplan.component';
import { ViewlabelrequestplanComponent } from './viewlabelrequestplan/viewlabelrequestplan.component';
import { ApprovallabelrequestplanComponent } from './approvallabelrequestplan/approvallabelrequestplan.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{ path: 'list', component: LabelrequestplanComponent },
{ path: 'add', component: AddlabelrequestplanComponent },
{ path: 'view', component: ViewlabelrequestplanComponent },
{ path: 'approval', component: ApprovallabelrequestplanComponent },
{ path: 'payment', component: PaymentComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelrequestplanRoutingModule { }

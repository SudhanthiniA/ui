import { NgModule } from '@angular/core';
import { RequestforethanalorderIDComponent } from './requestforethanalorder-id.component';
import { Routes, RouterModule } from '@angular/router';
import { AddrequestforethanalComponent } from './addrequestforethanal/addrequestforethanal.component';
import { ViewrequestforethanalComponent } from './viewrequestforethanal/viewrequestforethanal.component';
import { PaymentComponent } from './payment/payment.component';
import { ApprovalrequestforeodComponent } from './approvalrequestforeod/approvalrequestforeod.component';


const routes: Routes = [
  { path: 'list', component: RequestforethanalorderIDComponent},
  {path: 'add', component: AddrequestforethanalComponent},
  {path: 'view', component:ViewrequestforethanalComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'approval', component:ApprovalrequestforeodComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RequestforethanalorderRoutingModule { }

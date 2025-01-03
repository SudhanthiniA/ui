import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd20WholesaleComponent } from './pd20-wholesale.component';
import { Addpd20WholesaleComponent } from './addpd20-wholesale/addpd20-wholesale.component';
import { Viewpd20WholesaleComponent } from './viewpd20-wholesale/viewpd20-wholesale.component';
import { ListApprovalPd20WholesaleComponent } from './list-approval-pd20-wholesale/list-approval-pd20-wholesale.component';
import { ViewApprovalPd20WholesaleComponent } from './view-approval-pd20-wholesale/view-approval-pd20-wholesale.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';

const routes: Routes = [
  { path: 'list', component: Pd20WholesaleComponent },
{
  path : 'view',
  component : Viewpd20WholesaleComponent
},
{
  path : 'add',
  component : Addpd20WholesaleComponent
},
{
  path : 'listapproval',
  component : ListApprovalPd20WholesaleComponent
},
{
  path : 'viewapproval',
  component : ViewApprovalPd20WholesaleComponent
},
{
  path : 'payment',
  component : PaymentscreenComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd20WholesaleRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MstistofspiritComponent } from './mstistofspirit.component';
import { AddmstistofspiritComponent } from './addmstistofspirit/addmstistofspirit.component';
import { ViewmstistofspiritComponent } from './viewmstistofspirit/viewmstistofspirit.component';
import { VerificationmstistofspiritComponent } from './verificationmstistofspirit/verificationmstistofspirit.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';
import { MstistofspiritviewComponent } from './mstistofspiritview/mstistofspiritview.component';
// import { IstComponent } from './ist/ist.component';
import { ApproveComponent } from './approve/approve.component';


const routes: Routes = [
  {
    path : 'list',
    component : MstistofspiritComponent
  },
  {
    path: 'add',
    component : AddmstistofspiritComponent
  },
  // {
  //   path: 'ist',
  //   component : IstComponent
  // },
  {
    path: 'view',
    component : ViewmstistofspiritComponent
  },
  {
    path: 'approve',
    component : ApproveComponent
  },
  {
    path: 'preview',
    component : ViewmstistofspiritComponent
  },
  {
    path: 'edit/:Id',
    component : AddmstistofspiritComponent
  },
  {
    path: 'verify',
    component : VerificationmstistofspiritComponent
  },
  {
    path: 'payment',
    component : PaymentscreenComponent
  },
  {
    path: 'mstistofspiritview',
    component : MstistofspiritviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MstistofspiritRoutingModule { }

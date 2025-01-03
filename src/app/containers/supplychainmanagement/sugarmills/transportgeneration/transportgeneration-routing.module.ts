import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportgenerationComponent } from './transportgeneration.component';
import { ViewtransportgenerationComponent } from './viewtransportgeneration/viewtransportgeneration.component';
import { AddedittransportgenerationComponent } from './addedittransportgeneration/addedittransportgeneration.component';
import { AcknowledgementgatepassComponent } from './acknowledgementgatepass/acknowledgementgatepass.component';
import { QrcheckComponent } from './qrcheck/qrcheck.component';

const routes: Routes = [
  {
    path : 'list',
    component : TransportgenerationComponent
  },
  {
    path: 'add',
    component: AddedittransportgenerationComponent
  },
  {
    path: 'edit/:Id',
    component: AddedittransportgenerationComponent
  },
  {
    path : 'view/:Id',
    component : ViewtransportgenerationComponent
  },
  {
    path: 'acknowledged/:Id',
    component: AcknowledgementgatepassComponent
  },
  {
    path : 'preview',
    component : ViewtransportgenerationComponent
  },
  {
    path: 'qrcheck',
    component: QrcheckComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportgenerationRoutingModule { }

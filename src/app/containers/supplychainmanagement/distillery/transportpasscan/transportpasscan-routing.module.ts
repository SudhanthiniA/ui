import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportpasscanComponent } from './transportpasscan.component';

import { AddtransportpasscanComponent } from './addtransportpasscan/addtransportpasscan.component';
import { ViewtransportpasscanComponent } from './viewtransportpasscan/viewtransportpasscan.component';
import { ViewtransportpassapprovalComponent } from './viewtransportpassapproval/viewtransportpassapproval.component';

const routes: Routes = [
  {
    path : 'list',
    component : TransportpasscanComponent
  },
  {
    path: 'add',
    component : AddtransportpasscanComponent
  },
  {
    path : 'view',
    component : ViewtransportpasscanComponent
  },
  {
    path : 'approval',
    component : ViewtransportpassapprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportpasscanRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportpasscancelComponent } from './transportpasscancel.component';
import { AddtransportComponent } from './addtransport/addtransport.component';
import { ViewtransportComponent } from './viewtransport/viewtransport.component';

const routes: Routes = [
  { path: 'list', component: TransportpasscancelComponent },

  {
    path: 'add',
    component: AddtransportComponent
  },
  {
    path: 'add/:Id',
    component: AddtransportComponent
  },
  {
    path: 'view',
    component: ViewtransportComponent
  },
  {
    path: 'preview/:Id',
    component: ViewtransportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportpasscancelRoutingModule { }

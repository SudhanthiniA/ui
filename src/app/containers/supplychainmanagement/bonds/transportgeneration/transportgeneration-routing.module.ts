import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportgenerationComponent } from './transportgeneration.component';
import { ViewtransportgenerationComponent } from './viewtransportgeneration/viewtransportgeneration.component';

const routes: Routes = [
  {
    path : 'list',
    component : TransportgenerationComponent
  },
  {
    path : 'view/:Id',
    component : ViewtransportgenerationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportgenerationRoutingModule { }

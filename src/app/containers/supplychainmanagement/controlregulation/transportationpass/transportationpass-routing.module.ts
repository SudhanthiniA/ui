import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportationpassComponent } from './transportationpass.component';
import { AddtransportationpassComponent } from './addtransportationpass/addtransportationpass.component';
import { ViewtransportationpassComponent } from './viewtransportationpass/viewtransportationpass.component';
import { CantransportationpassComponent } from './cantransportationpass/cantransportationpass.component';

const routes: Routes = [
  {
    path : 'list',
    component : TransportationpassComponent
  },
  {
    path: 'add',
    component : AddtransportationpassComponent
  },
  {
    path : 'view',
    component : ViewtransportationpassComponent
  },
  {
    path : 'cancel',
    component : CantransportationpassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportationpassRoutingModule { }

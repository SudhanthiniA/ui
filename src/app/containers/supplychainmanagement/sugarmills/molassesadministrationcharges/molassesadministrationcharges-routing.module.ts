import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MolassesadministrationchargesComponent } from './molassesadministrationcharges.component';
import { AddeditmolassesadministrationchargesComponent } from './addeditmolassesadministrationcharges/addeditmolassesadministrationcharges.component';
import { ViewmolassesadministrationchargesComponent } from './viewmolassesadministrationcharges/viewmolassesadministrationcharges.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path : 'list',
    component : MolassesadministrationchargesComponent
  },
  {
    path : 'add',
    component : AddeditmolassesadministrationchargesComponent
  },
  {
    path : 'view',
    component : ViewmolassesadministrationchargesComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditmolassesadministrationchargesComponent
  },
  {
    path : 'preview',
    component : ViewmolassesadministrationchargesComponent
  },
  {
    path : 'payment',
    component : PaymentComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MolassesadministrationchargesRoutingModule { }

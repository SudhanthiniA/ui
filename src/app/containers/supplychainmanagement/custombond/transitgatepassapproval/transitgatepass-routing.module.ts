import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitgatepassComponent } from './transitgatepass.component';
import { ViewtransitgatepassComponent } from './viewtransitgatepass/viewtransitgatepass.component';
import { AddtransitgatepassComponent } from './addtransitgatepass/addtransitgatepass.component';
import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';

const routes: Routes = [
  {
    path: 'list',
    component: TransitgatepassComponent
  },
  {
    path: 'add',
    component: AddtransitgatepassComponent
  },
  {
    path: 'add/:id',
    component: AddtransitgatepassComponent
  },
  {
    path: 'view',
    component: ViewtransitgatepassComponent
  },
  {
    path: 'view/:id',
    component: ViewtransitgatepassComponent
  },
  {
    path: 'cancelmodify',
    component: CancelmodifypassComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransitgatepassRoutingModule { }

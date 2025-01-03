import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsignmentreceiptComponent } from './consignmentreceipt.component';

const routes: Routes = [
  {
    path: 'list',
    component: ConsignmentreceiptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsignmentreceiptRoutingModule { }

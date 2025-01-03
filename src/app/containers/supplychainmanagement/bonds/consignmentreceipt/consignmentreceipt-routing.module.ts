import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsignmentreceiptComponent } from './consignmentreceipt.component';
import { ViewconsignmentreceiptComponent } from './viewconsignmentreceipt/viewconsignmentreceipt.component';
import { AddeditconsignmentreceiptComponent } from './addeditconsignmentreceipt/addeditconsignmentreceipt.component';

const routes: Routes = [
  {
    path : 'list',
    component : ConsignmentreceiptComponent
  },
  {
    path : 'add',
    component : AddeditconsignmentreceiptComponent
  },
  {
    path : 'view/:Id',
    component : ViewconsignmentreceiptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsignmentreceiptRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsignmentreceiptComponent } from './consignmentreceipt.component';
import { ViewconsignmentreceiptComponent } from './viewconsignmentreceipt/viewconsignmentreceipt.component';


const routes: Routes = [
  {
    path : 'list',
    component : ConsignmentreceiptComponent
  },
  {
    path : 'view/:id',
    component : ViewconsignmentreceiptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsignmentreceiptRoutingModule { }

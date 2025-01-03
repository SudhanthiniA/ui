import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsignementreceiptComponent } from './consignementreceipt.component';

const routes: Routes = [
  { path: 'list', component: ConsignementreceiptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsignementreceiptRoutingModule { }

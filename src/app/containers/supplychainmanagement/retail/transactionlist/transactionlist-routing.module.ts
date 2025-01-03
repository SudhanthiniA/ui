import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionlistComponent } from './transactionlist.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';

const routes: Routes = [
  { path: '', component: TransactionlistComponent },
  { path: 'transactiondetails', component: TransactiondetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionlistRoutingModule { }

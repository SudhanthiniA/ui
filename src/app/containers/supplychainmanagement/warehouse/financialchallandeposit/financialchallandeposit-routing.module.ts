import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialchallandepositComponent } from './financialchallandeposit.component';
import { AddfinancialchallandepositComponent } from './addfinancialchallandeposit/addfinancialchallandeposit.component';
import { ViewfinancialchallandepositComponent } from './viewfinancialchallandeposit/viewfinancialchallandeposit.component';

const routes: Routes = [
  { path: 'list', component: FinancialchallandepositComponent },
  { path: 'add', component: AddfinancialchallandepositComponent },
  { path: 'view/:id', component: ViewfinancialchallandepositComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialchallandepositRoutingModule { }

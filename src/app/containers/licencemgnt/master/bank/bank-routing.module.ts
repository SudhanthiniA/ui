import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankComponent } from './bank.component';
import { ViewbankComponent } from './viewbank/viewbank.component';

const routes: Routes = [
  {
    path : 'list',
    component : BankComponent
  },
  {
    path : 'view',
    component : ViewbankComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }

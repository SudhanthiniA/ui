import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportapplicationComponent } from './exportapplication.component';
import { AddexportapplicationComponent } from './addexportapplication/addexportapplication.component';
import { ViewexportapplicationComponent } from './viewexportapplication/viewexportapplication.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path : 'list',
    component : ExportapplicationComponent
  },
  {
    path : 'add',
    component : AddexportapplicationComponent
  },
  {
    path : 'view',
    component : ViewexportapplicationComponent
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
export class ExportapplicationRoutingModule { }

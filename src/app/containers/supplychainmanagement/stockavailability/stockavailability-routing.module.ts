import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockavailabilityComponent } from './stockavailability.component';
import { AddstockavailabilityComponent } from './addstockavailability/addstockavailability.component';


const routes: Routes = [
  {
    path : '',
    component : StockavailabilityComponent
  },
  {
    path : 'add',
    component : AddstockavailabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockavailabilityRoutingModule { }

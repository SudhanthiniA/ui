import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockavailabilityComponent } from './stockavailability.component';
import { ViewstockavailabilityComponent } from './viewstockavailability/viewstockavailability.component';

const routes: Routes = [
  {
    path : 'list',
    component : StockavailabilityComponent
  },
  {
    path : 'view',
    component : ViewstockavailabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockavailabilityRoutingModule { }

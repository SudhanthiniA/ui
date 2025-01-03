import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockavailabilitywholesaleComponent } from './stockavailabilitywholesale.component';
import { StockavailabilityComponent } from './stockavailability/stockavailability.component';

const routes: Routes = [
  { path: '', component: StockavailabilitywholesaleComponent },
  { path: 'stockavailability/:id', component: StockavailabilityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockavailabilitywholesaleRoutingModule { }

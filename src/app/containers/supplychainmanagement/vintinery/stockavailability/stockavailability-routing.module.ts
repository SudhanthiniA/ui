import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockavailabilityComponent } from './stockavailability.component';
import { AddstockavailabilityComponent } from './addstockavailability/addstockavailability.component';
import { ViewstockavailabilityComponent } from './viewstockavailability/viewstockavailability.component';

const routes: Routes = [ 
  {
    path : 'add',
    component : AddstockavailabilityComponent
  },
  {
    path : 'view',
    component : ViewstockavailabilityComponent
  },
  {
    path : 'list',
    component : StockavailabilityComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockavailabilityRoutingModule { }

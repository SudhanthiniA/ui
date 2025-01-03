import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StockavailabilityCommonComponent } from './stockavailability-common.component';


const routes: Routes = [
  {
    path : 'list',
    component : StockavailabilityCommonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockavailabilityCommonRoutingModule { }

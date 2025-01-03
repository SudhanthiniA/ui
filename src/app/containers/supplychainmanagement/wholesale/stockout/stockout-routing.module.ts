import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockoutComponent } from './stockout.component';
import { ViewstockoutComponent } from './viewstockout/viewstockout.component';

const routes: Routes = [
  {
    path : 'list',
    component : StockoutComponent
  },
  {
    path : 'view/:id',
    component : ViewstockoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockoutRoutingModule { }

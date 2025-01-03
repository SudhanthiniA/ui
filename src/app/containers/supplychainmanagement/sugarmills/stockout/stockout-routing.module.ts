import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockoutComponent } from './stockout.component';
import { AddeditstockoutComponent } from './addeditstockout/addeditstockout.component';
import { ViewstockoutComponent } from './viewstockout/viewstockout.component';


const routes: Routes = [
  {
    path : 'list',
    component : StockoutComponent
  },
  {
    path : 'add',
    component : AddeditstockoutComponent
  },
  {
    path: 'edit/:Id',
    component: AddeditstockoutComponent
  },
  {
    path: 'view/:Id',
    component: ViewstockoutComponent
  },
  {
    path: 'preview',
    component: ViewstockoutComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockoutRoutingModule { }

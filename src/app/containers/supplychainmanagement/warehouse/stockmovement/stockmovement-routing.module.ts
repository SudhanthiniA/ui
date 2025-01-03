import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockmovementComponent } from './stockmovement.component';
import { AddstockmovementComponent } from './addstockmovement/addstockmovement.component';
import { ViewstockmovementComponent } from './viewstockmovement/viewstockmovement.component';

const routes: Routes = [
  {
    path: 'list',
    component: StockmovementComponent
  },
  {
    path: 'add',
    component: AddstockmovementComponent
  },
  {
    path: 'view',
    component: ViewstockmovementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockmovementRoutingModule { }

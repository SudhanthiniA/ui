import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockadjustmentComponent } from './stockadjustment.component';
import { ViewstockadjustmentComponent } from './viewstockadjustment/viewstockadjustment.component';
import { AddstockadjustmentComponent } from './addstockadjustment/addstockadjustment.component';

const routes: Routes = [
  {
    path: 'list',
    component: StockadjustmentComponent
  },
  {
    path: 'add',
    component: AddstockadjustmentComponent
  },
  {
    path: 'edit/:id',
    component: AddstockadjustmentComponent
  },
  {
    path: 'view',
    component: ViewstockadjustmentComponent
  },
  {
    path: 'view/:id',
    component: ViewstockadjustmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockadjustmentRoutingModule { }

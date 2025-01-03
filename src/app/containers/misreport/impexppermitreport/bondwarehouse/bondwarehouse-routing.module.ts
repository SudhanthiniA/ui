import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondwarehouseComponent } from './bondwarehouse.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : BondwarehouseComponent
  },
  {
    path : 'view', 
    component : ViewComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondwarehouseRoutingModule { }
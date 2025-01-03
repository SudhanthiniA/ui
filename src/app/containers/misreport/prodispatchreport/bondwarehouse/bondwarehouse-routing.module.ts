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
  // {
  //   path: 'bondwarehouse',
  //   loadChildren: () => import('./bondwarehouse/bondwarehouse.module').then(m => m.BondwarehouseModule)
  // }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondwarehouseRoutingModule { }

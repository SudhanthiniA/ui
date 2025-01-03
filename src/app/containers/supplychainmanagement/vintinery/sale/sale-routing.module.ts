import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SaleComponent } from './sale.component';
// import { AddComponent } from './add/add.component';
// import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path : 'list',
    component : SaleComponent
  },
  // {
  //   path : 'add',
  //   component : AddComponent
  // },
  // {
  //   path : 'view',
  //   component : ViewComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }

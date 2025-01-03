import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpiredproductComponent } from './expiredproduct.component';
import { ViewexpireComponent } from './viewexpire/viewexpire.component';

const routes: Routes = [
  {
    path: 'list',
    component: ExpiredproductComponent
  },
  {
    path: 'view',
    component: ViewexpireComponent
  },
  // {
  //   path: 'view/:id', 
  //   component: ViewexpireComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpiredproductRoutingModule { }

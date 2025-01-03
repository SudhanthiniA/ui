import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mb4Component } from './mb4.component';
import { Viewmb4Component } from './viewmb4/viewmb4.component';

const routes: Routes = [
  {
    path : 'list',
    component : Mb4Component
  },
  {
    path : 'view',
    component : Viewmb4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mb4RoutingModule { }

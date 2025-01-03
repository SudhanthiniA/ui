import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { St1Component } from './st1.component';

import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : St1Component
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
export class St1RoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { St2Component } from './st2.component';

import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : St2Component
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
export class St2RoutingModule { }

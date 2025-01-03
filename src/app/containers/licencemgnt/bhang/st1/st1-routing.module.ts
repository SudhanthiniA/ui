import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { St1Component } from './st1.component';
import { Viewst1Component } from './viewst1/viewst1.component';

const routes: Routes = [
  {
    path : 'list',
    component : St1Component
  },
  {
    path : 'view',
    component : Viewst1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class St1RoutingModule { }

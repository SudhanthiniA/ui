import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { St2Component } from './st2.component';
import { Viewst2Component } from './viewst2/viewst2.component';

const routes: Routes = [
  {
    path : 'list',
    component : St2Component
  },
  {
    path : 'view',
    component : Viewst2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class St2RoutingModule { }

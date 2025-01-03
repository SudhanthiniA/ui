import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { St3Component } from './st3.component';
import { Viewst3Component } from './viewst3/viewst3.component';

const routes: Routes = [
  {
    path : 'list',
    component : St3Component
  },
  {
    path : 'view',
    component : Viewst3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class St3RoutingModule { }

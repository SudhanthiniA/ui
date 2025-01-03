import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Id15Component } from './id15.component';
import { Viewid15Component } from './viewid15/viewid15.component';

const routes: Routes = [
  {
    path : 'list',
    component : Id15Component
  },
  {
    path : 'view',
    component : Viewid15Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Id15RoutingModule { }

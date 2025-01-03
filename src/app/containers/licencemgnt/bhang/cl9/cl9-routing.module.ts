import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl9Component } from './cl9.component';
import { Viewcl9Component } from './viewcl9/viewcl9.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl9Component
  },
  {
    path : 'view',
    component : Viewcl9Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cl9RoutingModule { }

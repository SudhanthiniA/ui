import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl7Component } from './cl7.component';
import { Viewcl7Component } from './viewcl7/viewcl7.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl7Component
  },
  {
    path : 'view',
    component : Viewcl7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cl7RoutingModule { }

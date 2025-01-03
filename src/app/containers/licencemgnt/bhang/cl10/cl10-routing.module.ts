import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl10Component } from './cl10.component';
import { Viewcl10Component } from './viewcl10/viewcl10.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl10Component
  },
  {
    path : 'view',
    component : Viewcl10Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cl10RoutingModule { }

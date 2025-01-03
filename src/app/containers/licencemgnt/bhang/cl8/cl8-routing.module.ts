import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl8Component } from './cl8.component';
import { Viewcl8Component } from './viewcl8/viewcl8.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl8Component
  },
  {
    path : 'view',
    component : Viewcl8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cl8RoutingModule { }

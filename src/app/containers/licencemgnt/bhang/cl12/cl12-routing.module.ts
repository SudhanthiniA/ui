import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl12Component } from './cl12.component';
import { Viewcl12Component } from './viewcl12/viewcl12.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl12Component
  },
  {
    path : 'view',
    component : Viewcl12Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cl12RoutingModule { }

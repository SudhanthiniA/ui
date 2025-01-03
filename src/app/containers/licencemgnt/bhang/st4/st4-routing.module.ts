import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { St4Component } from './st4.component';
import { Viewst4Component } from './viewst4/viewst4.component';

const routes: Routes = [
  {
    path : 'list',
    component : St4Component
  },
  {
    path : 'view',
    component : Viewst4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class St4RoutingModule { }

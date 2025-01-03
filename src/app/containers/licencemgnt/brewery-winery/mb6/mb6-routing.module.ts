import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mb6Component } from './mb6.component';
import { Viewmb6Component } from './viewmb6/viewmb6.component';

const routes: Routes = [
  {
    path : 'list',
    component : Mb6Component
  },
  {
    path : 'view',
    component : Viewmb6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mb6RoutingModule { }

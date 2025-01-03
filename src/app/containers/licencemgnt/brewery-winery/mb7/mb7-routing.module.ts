import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mb7Component } from './mb7.component';
import { Viewmb7Component } from './viewmb7/viewmb7.component';

const routes: Routes = [
  {
    path : 'list',
    component : Mb7Component
  },
  {
    path : 'view',
    component : Viewmb7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mb7RoutingModule { }

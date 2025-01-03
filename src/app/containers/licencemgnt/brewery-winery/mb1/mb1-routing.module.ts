import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mb1Component } from './mb1.component';
import { Viewmb1Component } from './viewmb1/viewmb1.component';

const routes: Routes = [
  {
    path : 'list',
    component : Mb1Component
  },
  {
    path : 'view',
    component : Viewmb1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mb1RoutingModule { }

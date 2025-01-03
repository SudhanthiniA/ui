import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B1Component } from './b1.component';
import { Viewb1Component } from './viewb1/viewb1.component';

const routes: Routes = [
  {
    path : 'list',
    component : B1Component
  },
  {
    path : 'view',
    component : Viewb1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B1RoutingModule { }

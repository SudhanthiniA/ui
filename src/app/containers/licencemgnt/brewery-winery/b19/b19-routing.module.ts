import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B19Component } from './b19.component';
import { Viewb19Component } from './viewb19/viewb19.component';

const routes: Routes = [
  {
    path : 'add',
    component : B19Component
  },
  {
    path : 'view',
    component : Viewb19Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B19RoutingModule { }

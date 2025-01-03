import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B20Component } from './b20.component';
import { Viewb20Component } from './viewb20/viewb20.component';

const routes: Routes = [
  {
    path : 'list',
    component : B20Component
  },
  {
    path : 'view',
    component : Viewb20Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B20RoutingModule { }

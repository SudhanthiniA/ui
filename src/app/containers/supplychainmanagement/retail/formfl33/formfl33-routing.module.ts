import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl33Component } from './formfl33.component';
import { Viewformfl33Component } from './viewformfl33/viewformfl33.component';
import { Addformfl33Component } from './addformfl33/addformfl33.component';

const routes: Routes = [
  {
    path: 'list',
    component: Formfl33Component
  },
  {
    path: 'add',
    component: Addformfl33Component
  },
  {
    path: 'view',
    component: Viewformfl33Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl33RoutingModule { }

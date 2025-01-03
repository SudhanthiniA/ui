import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl30Component } from './formfl30.component';
import { Addformfl30Component } from './addformfl30/addformfl30.component';
import { Viewformfl30Component } from './viewformfl30/viewformfl30.component';

const routes: Routes = [
  {
    path: 'list',
    component: Formfl30Component
  },
  {
    path: 'add',
    component: Addformfl30Component
  },
  {
    path: 'view/:id',
    component: Viewformfl30Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl30RoutingModule { }

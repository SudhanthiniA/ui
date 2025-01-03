import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl42Component } from './formfl42.component';
import { Viewfl42Component } from './viewfl42/viewfl42.component';
import { Addfl42Component } from './addfl42/addfl42.component';

const routes: Routes = [
  {
    path: 'list',
    component: Formfl42Component
  },
  {
    path: 'add',
    component: Addfl42Component
  },
  {
    path: 'view/:id',
    component: Viewfl42Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl42RoutingModule { }

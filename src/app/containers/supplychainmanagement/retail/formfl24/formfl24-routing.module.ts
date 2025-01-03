import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl24Component } from './formfl24.component';
import { Addfl24Component } from './addfl24/addfl24.component';
import { Viewfl24Component } from './viewfl24/viewfl24.component';

const routes: Routes = [
  {
    path: 'list',
    component: Formfl24Component
  },
  {
    path: 'add',
    component: Addfl24Component
  },
  {
    path: 'view/:id',
    component: Viewfl24Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl24RoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl13Component } from './formfl13.component';
import { Addfl13Component } from './addfl13/addfl13.component';
import { Viewfl13Component } from './viewfl13/viewfl13.component';

const routes: Routes = [
  {
    path: 'list',
    component: Formfl13Component
  },
  {
    path: 'add',
    component: Addfl13Component
  },
  {
    path: 'view/:id',
    component: Viewfl13Component
  },
  {
    path: 'edit/:id',
    component: Addfl13Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl13RoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl35Component } from './formfl35.component';
import { Viewfl35Component } from './viewfl35/viewfl35.component';
import { Addfl35Component } from './addfl35/addfl35.component';

const routes: Routes = [
  {
    path: 'list',
    component: Formfl35Component
  },
  {
    path: 'add',
    component: Addfl35Component
  },
  {
    path: 'edit/:id',
    component: Addfl35Component
  },
  {
    path: 'view/:id',
    component: Viewfl35Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl35RoutingModule { }

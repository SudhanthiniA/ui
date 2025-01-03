import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flb36Component } from './flb36.component';
import { Addflb36Component } from './addflb36/addflb36.component';
import { Viewflb36Component } from './viewflb36/viewflb36.component';

const routes: Routes = [
  {
    path : 'list',
    component : Flb36Component
  },
  {
    path : 'add',
    component : Addflb36Component
  },
  {
    path : 'view',
    component : Viewflb36Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flb36RoutingModule { }

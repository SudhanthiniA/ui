import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flb3Component } from './flb3.component';
import { Addflb3Component } from './addflb3/addflb3.component';
import { Viewflb3Component } from './viewflb3/viewflb3.component';

const routes: Routes = [
  {
    path : 'list',
    component : Flb3Component
  },
  {
    path: 'add',
    component : Addflb3Component
  },
  {
    path: 'view',
    component : Viewflb3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flb3RoutingModule { }

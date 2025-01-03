
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B14Component } from './b14.component';
import { Addb14Component } from './addb14/addb14.component';
import { Viewb14Component } from './viewb14/viewb14.component';

const routes: Routes = [
  {
    path : 'add',
    component : Addb14Component
  },
  {
    path : 'view',
    component : Viewb14Component
  },
  {
    path : 'list',
    component : B14Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B14RoutingModule { }

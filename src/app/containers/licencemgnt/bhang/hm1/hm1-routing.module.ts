import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hm1Component } from './hm1.component';
import { Viewhm1Component } from './viewhm1/viewhm1.component';

const routes: Routes = [
  {
    path : 'add',
    component : Hm1Component
  },
  {
    path : 'view',
    component : Viewhm1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hm1RoutingModule { }

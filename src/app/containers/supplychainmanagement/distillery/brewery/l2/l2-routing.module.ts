
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L2Component } from './l2.component';
import { Addl2Component } from './addl2/addl2.component';
import { Viewl2Component } from './viewl2/viewl2.component';

const routes: Routes = [
  {
    path : 'add',
    component : Addl2Component
  },
  {
    path : 'view',
    component : Viewl2Component
  },
  {
    path : 'list',
    component : L2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L2RoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Addl1Component } from './addl1/addl1.component';
import { Viewl1Component } from './viewl1/viewl1.component';
import { L1Component } from './l1.component';

const routes: Routes = [
  {
    path : 'add',
    component : Addl1Component
  },
  {
    path : 'view',
    component : Viewl1Component
  },
  {
    path : 'list',
    component : L1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L1RoutingModule { }

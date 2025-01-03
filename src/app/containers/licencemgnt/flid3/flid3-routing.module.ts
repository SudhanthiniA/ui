import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Flid3Component } from './flid3.component';
import { Viewflid3Component } from './viewflid3/viewflid3.component';

const routes: Routes = [
  {
    path: '',
    component: Flid3Component
  },
  {
    path: 'view',
    component: Viewflid3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flid3RoutingModule { }

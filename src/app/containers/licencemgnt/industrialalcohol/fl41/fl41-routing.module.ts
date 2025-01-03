import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl41Component } from './fl41.component';

const routes: Routes = [
  {
    path : 'add',
    component : Fl41Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl41RoutingModule { }

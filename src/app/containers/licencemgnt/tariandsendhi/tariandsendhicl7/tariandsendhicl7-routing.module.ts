import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tariandsendhicl7Component } from './tariandsendhicl7.component';
import { Viewtariandsendhicl7Component } from './viewtariandsendhicl7/viewtariandsendhicl7.component';

const routes: Routes = [
  {
    path : 'add',
    component : Tariandsendhicl7Component
  },
  {
    path : 'view',
    component : Viewtariandsendhicl7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tariandsendhicl7RoutingModule { }

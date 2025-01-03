import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tariandsendhicl10Component } from './tariandsendhicl10.component';
import { Viewtariandsendhicl10Component } from './viewtariandsendhicl10/viewtariandsendhicl10.component';

const routes: Routes = [
  {
    path : 'add',
    component : Tariandsendhicl10Component
  },
  {
    path : 'view',
    component : Viewtariandsendhicl10Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tariandsendhicl10RoutingModule { }

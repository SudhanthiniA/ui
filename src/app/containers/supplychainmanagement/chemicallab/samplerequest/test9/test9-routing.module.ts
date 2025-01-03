import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test9Component } from './test9.component';
import { Viewtest9Component } from './viewtest9/viewtest9.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test9Component
  },
  
  {
    path : 'view',
    component : Viewtest9Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test9RoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test6Component } from './test6.component';
import { Viewtest6Component } from './viewtest6/viewtest6.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test6Component
  },
  
  {
    path : 'view',
    component : Viewtest6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test6RoutingModule { }

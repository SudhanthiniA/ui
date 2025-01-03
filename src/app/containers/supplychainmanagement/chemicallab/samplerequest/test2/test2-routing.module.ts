import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test2Component } from './test2.component';
import { Viewtest2Component } from './viewtest2/viewtest2.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test2Component
  },
  
  {
    path : 'view',
    component : Viewtest2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test2RoutingModule { }

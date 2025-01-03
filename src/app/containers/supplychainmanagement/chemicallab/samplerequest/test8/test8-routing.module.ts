import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test8Component } from './test8.component';
import { Viewtest8Component } from './viewtest8/viewtest8.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test8Component
  },
  
  {
    path : 'view',
    component : Viewtest8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test8RoutingModule { }

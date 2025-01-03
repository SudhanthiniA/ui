import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test7Component } from './test7.component';
import { Viewtest7Component } from './viewtest7/viewtest7.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test7Component
  },
  
  {
    path : 'view',
    component : Viewtest7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test7RoutingModule { }

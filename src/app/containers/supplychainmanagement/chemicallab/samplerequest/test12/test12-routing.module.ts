import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test12Component } from './test12.component';
import { Viewtest12Component } from './viewtest12/viewtest12.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test12Component
  },
  
  {
    path : 'view',
    component : Viewtest12Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test12RoutingModule { }

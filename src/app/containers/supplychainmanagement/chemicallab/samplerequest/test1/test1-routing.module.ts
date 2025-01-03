import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test1Component } from './test1.component';
import { Viewtest1Component } from './viewtest1/viewtest1.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test1Component
  },
  
  {
    path : 'view',
    component : Viewtest1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test1RoutingModule { }

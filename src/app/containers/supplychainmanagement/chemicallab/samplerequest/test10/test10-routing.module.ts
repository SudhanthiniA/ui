import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test10Component } from './test10.component';
import { Viewtest10Component } from './viewtest10/viewtest10.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test10Component
  },
  
  {
    path : 'view',
    component : Viewtest10Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test10RoutingModule { }

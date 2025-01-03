import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test5Component } from './test5.component';
import { Viewtest5Component } from './viewtest5/viewtest5.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test5Component
  },
  
  {
    path : 'view',
    component : Viewtest5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test5RoutingModule { }

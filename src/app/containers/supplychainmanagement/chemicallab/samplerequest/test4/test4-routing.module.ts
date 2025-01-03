import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test4Component } from './test4.component';
import { Viewtest4Component } from './viewtest4/viewtest4.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test4Component
  },
  
  {
    path : 'view',
    component : Viewtest4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test4RoutingModule { }

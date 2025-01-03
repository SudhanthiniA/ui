import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test3Component } from './test3.component';
import { Viewtest3Component } from './viewtest3/viewtest3.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test3Component
  },
  
  {
    path : 'view',
    component : Viewtest3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test3RoutingModule { }

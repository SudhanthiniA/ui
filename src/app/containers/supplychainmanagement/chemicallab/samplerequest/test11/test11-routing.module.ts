import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test11Component } from './test11.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'add',
    component : Test11Component
  },
  
  {
    path : 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test11RoutingModule { }

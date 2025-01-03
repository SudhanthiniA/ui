import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { V1Component } from './v1.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path : 'add',
    component : V1Component
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
export class V1RoutingModule { }

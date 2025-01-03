import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { V2Component } from './v2.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path : 'add',
    component : V2Component
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
export class V2RoutingModule { }

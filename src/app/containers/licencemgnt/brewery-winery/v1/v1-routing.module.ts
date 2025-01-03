import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V1Component } from './v1.component';
import { Viewv1Component } from './viewv1/viewv1.component';

const routes: Routes = [
  {
    path : 'list',
    component : V1Component
  },
  {
    path : 'view',
    component : Viewv1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V1RoutingModule { }

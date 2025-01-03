import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V4Component } from './v4.component';
// import { Viewv4Component } from './viewv4/viewv4.component';

const routes: Routes = [
  {
    path : 'list',
    component : V4Component
  }
  // {
  //   path : 'view',
  //   component : Viewv4Component
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V4RoutingModule { }

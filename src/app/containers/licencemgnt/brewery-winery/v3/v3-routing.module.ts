import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V3Component } from './v3.component';
// import { Viewv3Component } from './viewv3/viewv3.component';

const routes: Routes = [
  {
    path : 'list',
    component : V3Component
  }
  // {
  //   path : 'view',
  //   component : Viewv3Component
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V3RoutingModule { }

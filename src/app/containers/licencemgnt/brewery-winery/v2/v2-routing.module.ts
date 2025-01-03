import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V2Component } from './v2.component';
import { Viewv2Component } from './viewv2/viewv2.component';

const routes: Routes = [
  {
    path : 'list',
    component : V2Component
  },
  {
    path : 'view',
    component : Viewv2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V2RoutingModule { }

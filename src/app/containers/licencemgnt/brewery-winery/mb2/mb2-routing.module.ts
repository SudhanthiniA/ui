import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mb2Component } from './mb2.component';
import { Viewmb2Component } from './viewmb2/viewmb2.component';

const routes: Routes = [
  {
    path : 'list',
    component : Mb2Component
  },
  {
    path : 'view',
    component : Viewmb2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mb2RoutingModule { }

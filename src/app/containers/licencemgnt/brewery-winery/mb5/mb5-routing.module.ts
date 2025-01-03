import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mb5Component } from './mb5.component';
import { Viewmb5Component } from './viewmb5/viewmb5.component';

const routes: Routes = [
  {
    path : 'list',
    component : Mb5Component
  },
  {
    path : 'view',
    component : Viewmb5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mb5RoutingModule { }

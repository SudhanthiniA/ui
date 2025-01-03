import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sw1Component } from './sw1.component';
import { Viewsw1Component } from './viewsw1/viewsw1.component';

const routes: Routes = [
  {
    path : 'list',
    component : Sw1Component
  },
  {
    path : 'view',
    component : Viewsw1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Sw1RoutingModule { }



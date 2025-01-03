import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tariandsendhicl12Component } from './tariandsendhicl12.component';
import { Viewtariandsendhicl12Component } from './viewtariandsendhicl12/viewtariandsendhicl12.component';


const routes: Routes = [
  {
    path : 'add',
    component : Tariandsendhicl12Component
  },
  {
    path : 'view',
    component : Viewtariandsendhicl12Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tariandsendhicl12RoutingModule { }
